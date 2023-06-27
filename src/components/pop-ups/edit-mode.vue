<script>
import { edit, editItems} from '../../components/model-controller/View-info.js';
import { ref, reactive } from 'vue';

export default{
    setup(){
        return{
            editItems,
            edit,
        }
    },

    props: ['TogglePopUp'],


    data() {
    return {
      uploadedImage: this.edit.img,
    };
  },
  methods: {


    openFileInput() {
      this.$refs.fileInput.click();
    },
    handleImageUpload(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.uploadedImage = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },


autoResizeTextArea(event) {
  const textarea = event.target;
  const maxHeight = '400px'; 

  textarea.style.height = 'auto';
  textarea.style.height = `${textarea.scrollHeight}px`;

  if (textarea.scrollHeight > parseInt(maxHeight)) {
        textarea.style.overflowY = 'scroll';
        textarea.style.height = maxHeight;
      } else {
        textarea.style.overflowY = 'hidden';
      }
    }
  },
}
</script>


<template>
    <div class="default-pop-up">
        <div class="default-pop-up-inner">
            <slot/>
            
            <div class="form-field">
                <input
                    type="text"
                    id="food-name"
                    class="rndMenu-input"
                    v-model="edit.name"/>
            </div>

            <div class="form-field">
                <textarea  
                    id="food-description"
                    class="rndMenu-input rndMenu-textarea"
                    @input="autoResizeTextArea"
                    placeholder="Description"
                    v-model="edit.description"/>
            </div>

            <div>
                <img v-if="uploadedImage" 
                  :src="uploadedImage" 
                  alt="Uploaded Image" 
                  class="menu-image uploaded-image"/>
            </div>

            <input type="file" ref="fileInput" @change="handleImageUpload" style="display: none" />     
            <button 
                @click="openFileInput" 
                class="upload-button">
                  Upload Image
            </button>

            <button 
              class="add" 
              @click="editItems(edit), TogglePopUp()">
                Save
              </button>

        </div>
    </div>
</template>


<style scoped>
.uploaded-image {
  height: 150px;
  width: 150px;
  margin-bottom: 0px;
  margin-top: 10px;
}

.upload-button {
  margin-right: 15px;
  text-align: center;
  color: #333;
}


.form-field {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
}

.rndMenu-input {
    flex: 1;
    font-size: 20px;
    font-family: Arial;
}

.rndMenu-textarea {
  resize: none;
  min-height: 100px;
  overflow-y: auto;
}
</style>