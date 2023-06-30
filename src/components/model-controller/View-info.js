import { currentView } from './Inner-menu';
import { ref } from 'vue';
import axios from 'axios';

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

    console.log('Uploaded info :' + img)
    console.log('Editing...');
    const response = await axios.put(`${url}/settings/edit`, null, {
        params: {
            name: name,
            description: description,
            img: img,
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


  export const deleteItem = async(id) => {
    try{
        console.log(id)
        console.log('Deleting...');
        const response = await axios.delete(`${url}/edit/delete`, {
            params: {
                id: id,
                page: currentView
            }
        });
        console.log('Deleted!');
        console.log(response);
    } catch (error){
        console.log(error);
        return;
    }
  }
