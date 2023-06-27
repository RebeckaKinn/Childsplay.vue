import Default_Image from '../../img/mustache_cat.jpg';
import axios from 'axios';
import { url } from '../../components/model-controller/Inner-menu.js';

import { ref, watch } from 'vue';

export let inputInfo = ref({
    title: '',
    description: '',
    img: Default_Image,
});

export let newInfoMenu = ref({
    title: '',
    currentPage: ''
});

export const ShowRndAddMenu = (key) => {
    newInfoMenu.value.title = key === 'dinnerRnd' ? 'Add dinner' : 'Add activity';
    newInfoMenu.value.currentPage = key;
}

export const AddNewInfo = async () => {
    try{
            const name = inputInfo.value.title;
            const description = inputInfo.value.description;
            const img = inputInfo.value.img;
            const page = newInfoMenu.value.currentPage;

        console.log(inputInfo.value.title)
        console.log('Adding new item to database...');
        const response = await axios.post(`${url}/settings/menu-items`, null, {
            params: {
                name: name,
                description: description,
                img: img,
                page: page
            }
        });
        console.log(response.data);

        console.log("DONE")
        EmptyValues();
    } catch (error){
        console.log(error);
        EmptyValues();
        return;
    }
}

const EmptyValues = () => {
    inputInfo.value.title = '';
    inputInfo.value.description = '';
    inputInfo.value.img = Default_Image;

    newInfoMenu.value.title = '';
    newInfoMenu.value.currentPage = '';
}