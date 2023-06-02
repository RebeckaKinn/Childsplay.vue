
import TestImg from '../../img/mustache_cat.jpg'
import { ref } from 'vue';

export let rndMenuItems = ref({
    title: 'kake',
    description: 'bak en kake',
    img: TestImg,
})

export let currentView = '';


export const menuToShow = (key) => {

    currentView = key;
    console.log(currentView)
    rndMenuInfo(key === 'dinnerRnd' ? DB_food : DB_activity);

}

export const rndMenuInfo = (Rnd_array) => {
    let rndIndex = Math.floor(Math.random() * Rnd_array.length);
    console.log(rndIndex);

    rndMenuItems.value.title = Rnd_array[rndIndex].title;
    rndMenuItems.value.description = Rnd_array[rndIndex].description;
    rndMenuItems.value.img = Rnd_array[rndIndex].img;

}



const DB_food = [
    {title: 'Taco', img: TestImg, description: 'Steke tacokjøtt med mild krydder, og ikke fordele kjøttdeigen for mye slik at det er lettere for barna å spise.'},
    {title: 'Fiskekaker og pasta', img: TestImg, description: 'Steke i terninger med kokte grønnsaker og pasta.'},
    {title: 'Burger', img: TestImg, description: 'Steke i paninigjernet med ost og krydder, samt ristet burgerbrød.'},
    {title: 'Pannekaker', img: TestImg, description: 'La barna bli med å røre røren, og stek dem tynne. Smør på med pålegg hvis de ønsker det.'},
    {title: 'Kjøttboller med saus', img: TestImg, description: 'Stek bollene, kok grønnsaker og lag sausen separat og tilby hvis de ønsker.'},

]

const DB_activity = [
    {title: 'Lokale lekeplassen', img: TestImg, description: 'La vognen være hjemme, ta med bøtte og spade og la de grave og huske.'},
    {title: 'Stranda', img: TestImg, description: 'Sykle eller gå, ta med lite telt og graveleker, samt noe å spise og bruk mesteparten av dagen ute.'},
    {title: 'Tur i bøkeskogen', img: TestImg, description: 'Gå igjennom skogen og end opp ved lekeplassen. Kjøp is hvis været er fint. Husk graveleker!'},
    {title: 'Besøk momo eller dutte', img: TestImg, description: 'Avtal besøk og gå tur i nærområdet eller lek i hagen.'},
    {title: 'Shopping med noen', img: TestImg, description: 'Kontakt noen å ta med på senteret og la barna gå rundt og leke. Spis på kafè, men ta med noe ekstra de kan gomle på.'},

]
