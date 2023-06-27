//import {} from './components/model-controller/Inner-menu.js';
import { ref } from 'vue';

export let edit = ref({
    name: '',
    description: '',
    img: null,
});

export const getItems = (currentName, currentDesc, currentImg) => {
    edit.value.name = currentName;
    edit.value.description = currentDesc;
    edit.value.img = currentImg;
    console.log('getItems: ' + edit.value.name)
    return edit;
}

export const editItems = () => {

}

const emptyValues = () => {
    edit.value.name = '';
    edit.value.description = '';
    edit.value.img = null;
}