import Default_Image from '../../img/mustache_cat.jpg';
import { DB_activity, DB_food } from '../../components/model-controller/Inner-menu.js';

import { ref } from 'vue';

export let inputInfo = ref({
    title: '',
    description: '',
    img: Default_Image,
});

export let newInfoMenu = {
    title: '',
    currentPage: ''
};

export const ShowRndAddMenu = (key) => {
    newInfoMenu.title = key === 'dinnerRnd' ? 'Add dinner' : 'Add activity';
    newInfoMenu.currentPage = key;
}

export const AddNewInfo = (newTitle, newDescription, newImg) => {
    console.log('runnung...')
    inputInfo.value.title = newTitle;
    inputInfo.value.description = newDescription;
    inputInfo.value.img = newImg;

    console.log(newInfoMenu.currentPage)

    let DB = newInfoMenu.currentPage === 'dinnerRnd' ? DB_food : DB_activity;

    DB.push({
        title: newTitle,
        img: newImg,
        description: newDescription
    },)

    console.log(DB)
    EmptyValues();
    console.log("DONE")
}

const EmptyValues = () => {
    inputInfo.value.title = '';
    inputInfo.value.description = '';
    inputInfo.value.img = Default_Image;

    newInfoMenu.title = '';
    newInfoMenu.currentPage = '';
}