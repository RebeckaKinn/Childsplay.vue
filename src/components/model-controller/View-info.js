import { currentView } from './Inner-menu';
import { ref } from 'vue';

export let edit = ref({
    name: '',
    description: '',
    img: null,
    id: null,
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

    console.log(edit.value.name + ' ' + currentView)
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
