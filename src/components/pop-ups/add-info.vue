<script>

import { newInfoMenu, inputInfo, AddNewInfo } from '../model-controller/Add-rnd-info.js';
import addedMessageVue from '../../components/Info/added-message.vue';

export default {
    setup(){
        return{
            newInfoMenu,
            inputInfo,
            AddNewInfo
        }
    },

  data() {
    return {
      uploadedImage: inputInfo.value.img,
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
          inputInfo.value.img = e.target.result;
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

  props: ['TogglePopUp'],

  components: {
    addedMessageVue,
  }
  
};
</script>

<template>
    <div class="default-pop-up">
        <div class="default-pop-up-inner">
            <div class="default-header rework-header">
                {{ newInfoMenu.title }}
            </div>
            <slot/>

            <div class="form-field">
                <input
                    type="text"
                    id="food-name"
                    class="rndMenu-input"
                    placeholder="Title"
                    v-model="inputInfo.title"/>
            </div>

            <div class="form-field">
                <textarea  
                    id="food-description"
                    class="rndMenu-input rndMenu-textarea"
                    @input="autoResizeTextArea"
                    placeholder="Description"
                    v-model="inputInfo.description"/>
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
              @click="AddNewInfo(), TogglePopUp()">
                Add
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

.rework-header{
    margin-bottom: 15px;


}
</style>
