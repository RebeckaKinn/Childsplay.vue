
import TestImg from '../../img/mustache_cat.jpg'
import { ref } from 'vue';

export const rndMenuItems = ref({
    title: 'kake',
    description: 'bak en kake',
    img: TestImg,
})


export const menuToShow = (key) => {
    if(key === 'dinnerRnd'){

    }
}

/*
- Legge til å kunne legge inn ny data i rndMenuItems når menuToShow blir kalt.
*/