import { currentView } from './Inner-menu';
import { ref } from 'vue';
import axios from 'axios';

import Compressor from 'image-compressor.js';

const url = 'http://localhost:5121';

export let edit = ref({
    name: '',
    description: '',
    img: '',
    id: '',
});

export const getItems = (currentName, currentDesc, currentImg, currentId) => {
    edit.value.name = currentName;
    edit.value.description = currentDesc;
    edit.value.img = currentImg;
    edit.value.id = currentId;
    return edit;
}

export const editItems = async () => {
    try{
        const name = edit.value.name;
        const description = edit.value.description;
        const img = edit.value.img;
        const id = edit.value.id;
        const page = currentView;

        const compressedImage = await compressImage(img);
    console.log('Uploaded info : ' + compressedImage + ' ' + currentView)
    console.log('Editing...');
    const response = await axios.put(`${url}/settings/edit`, null, {
        params: {
            name: name,
            description: description,
            img: compressedImage,
            id: id,
            page: page
        }
    });
    
    console.log(response.data);

    console.log("DONE")
} catch (error){
    console.log(error);
    return;
}
}

const compressImage = async (imageDataUrl) => {
    const compressedImage = await new Promise((resolve, reject) => {
      const img = new Image();
      img.src = imageDataUrl;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        canvas.toBlob(
          (blob) => {
            const compressor = new Compressor();
            compressor.compress(blob, {
              success: (compressedBlob) => {
                const reader = new FileReader();
                reader.onload = () => resolve(reader.result);
                reader.readAsDataURL(compressedBlob);
              },
              error: (err) => reject(err),
            });
          },
          'image/jpeg',
          0.7 // Specify the desired JPEG quality (0.0 - 1.0)
        );
      };
      img.onerror = (err) => reject(err);
    });
  
    return compressedImage;
  };
