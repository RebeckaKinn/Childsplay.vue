<template>
    <div class="default-pop-up">
        <div class="default-pop-up-inner">
            <slot/>

            <div class="form-field">
                <label for="food-name" class="rndMenu-label name-label">
                    Name
                </label>
                <input
                    type="text"
                    id="food-name"
                    class="rndMenu-input"/>
            </div>

            <div class="form-field">
                <label for="food-description" class="rndMenu-label">
                    Description
                </label>
                <textarea  
                    id="food-description"
                    class="rndMenu-textarea"
                    @input="autoResizeTextArea"/>
            </div>

            <div>
                <img v-if="uploadedImage" :src="uploadedImage" alt="Uploaded Image" class="menu-image uploaded-image"/>
            </div>

            <input type="file" ref="fileInput" @change="handleImageUpload" style="display: none" />     
            <button @click="openFileInput" class="upload-button">Upload Image</button>

            <button class="add" @click="TogglePopUp()">Add</button>
        </div>

    </div>
</template>

<script>
import Default_Image from '../../img/mustache_cat.jpg';

export default {
  data() {
    return {
      uploadedImage: Default_Image,
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
  const lineHeight = parseInt(window.getComputedStyle(textarea).lineHeight);
  const maxLines = 10; // Set the maximum number of lines here

  const lines = Math.floor(textarea.scrollHeight / lineHeight);
  textarea.style.overflowY = lines > maxLines ? 'scroll' : 'auto';
  textarea.style.height = lines > maxLines ? `${maxLines * lineHeight}px` : 'auto';
}

//textaerea does not "grow" when you write, only adds a scrollbar. 

  },
  props: ['TogglePopUp'],
  
};
</script>

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
    margin-left: 10px;
    resize: vertical;
    min-height: 5px;
    font-size: 20px;
    font-family: Arial;
}

.rndMenu-textarea {
  flex: 1;
  margin-left: 10px;
  resize: none;
  min-height: 100px;
  overflow-y: auto;
  font-size: 20px;
  font-family: Arial;
}

.rndMenu-label {
  flex: 0;
}
.name-label{
    margin-right: 37px;
}
</style>
