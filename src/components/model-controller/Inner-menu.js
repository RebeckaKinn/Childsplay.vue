
import Pasta from '../../img/pasta.jpg'
import Burger from '../../img/burger.jpg'
import Taco from '../../img/tacos.jpg'
import Pannekaker from '../../img/pannekaker.jpg'
import Kjøttboller from '../../img/kjøttboller.jpg'

import Lekeplass from '../../img/lekeplass.jpg'
import Hus from '../../img/hus.jpg'
import Shopping from '../../img/shopping.jpg'
import Stranda from '../../img/stranda.jpg'
import Skog from '../../img/bøkeskogen.jpg'

import { ref } from 'vue';

export let rndMenuItems = ref({
    title: '',
    description: '',
    img: null,
})

export const frontMenuImage = ref({
    dinnerImage: '',
    activityImage: ''
})

export let currentView = '';
let lastIndex = '';


export const menuToShow = (key) => {

    currentView = key;
    rndMenuInfo(key === 'dinnerRnd' ? DB_food : DB_activity);
}

export const rndMenuInfo = (Rnd_array) => {
    let rndIndex = Math.floor(Math.random() * Rnd_array.length);
    if(lastIndex === rndIndex) {
        rndIndex = rndIndex === Rnd_array.length ? rndIndex -1 : rndIndex +1;
    }
    lastIndex = rndIndex;
    console.log('rndIndex - ' + rndIndex);

    rndMenuItems.value.title = Rnd_array[rndIndex].title;
    rndMenuItems.value.description = Rnd_array[rndIndex].description;
    rndMenuItems.value.img = Rnd_array[rndIndex].img;

    if(Rnd_array === DB_food) {
        frontMenuImage.value.dinnerImage = Rnd_array[rndIndex].img;
        return frontMenuImage.value.dinnerImage;
    }
    if(Rnd_array === DB_activity) {
        frontMenuImage.value.activityImage = Rnd_array[rndIndex].img;
        return frontMenuImage.value.activityImage;
    }

}

export const changeMenuImage = (key) => {
    if (key === 'dinnerRnd') {
        frontMenuImage.value.dinnerImage = rndMenuItems.value.img;
        return frontMenuImage.value.dinnerImage
    }
    if (key === 'activityRnd') {
        frontMenuImage.value.activityImage = rndMenuItems.value.img;
        return frontMenuImage.value.activityImage
    }
}


export const menuImage = (key) => {
  let Rnd_array = key === 'dinnerRnd' ? DB_food : DB_activity
  let rndNumber = Math.floor(Math.random() * Rnd_array.length)

  if (key === 'dinnerRnd') {
    frontMenuImage.value.dinnerImage = Rnd_array[rndNumber].img
    return frontMenuImage.value.dinnerImage;
  }
  if (key === 'activityRnd') {
    frontMenuImage.value.activityImage = Rnd_array[rndNumber].img
    return frontMenuImage.value.activityImage;
  }
}

//dummy database::

const DB_food = [
    {title: 'Taco', img: Taco, description: 'Steke tacokjøtt med mild krydder, og ikke fordele kjøttdeigen for mye slik at det er lettere for barna å spise.'},
    {title: 'Fiskekaker og pasta', img: Pasta, description: 'Steke i terninger med kokte grønnsaker og pasta.'},
    {title: 'Burger', img: Burger, description: 'Steke i paninigjernet med ost og krydder, samt ristet burgerbrød.'},
    {title: 'Pannekaker', img: Pannekaker, description: 'La barna bli med å røre røren, og stek dem tynne. Smør på med pålegg hvis de ønsker det.'},
    {title: 'Kjøttboller med saus', img: Kjøttboller, description: 'Stek bollene, kok grønnsaker og lag sausen separat og tilby hvis de ønsker.'},
];

const DB_activity = [
    {title: 'Lokale lekeplassen', img: Lekeplass, description: 'La vognen være hjemme, ta med bøtte og spade og la de grave og huske.'},
    {title: 'Stranda', img: Stranda, description: 'Sykle eller gå, ta med lite telt og graveleker, samt noe å spise og bruk mesteparten av dagen ute.'},
    {title: 'Tur i bøkeskogen', img: Skog, description: 'Gå igjennom skogen og end opp ved lekeplassen. Kjøp is hvis været er fint. Husk graveleker!'},
    {title: 'Besøke besteforeldrene', img: Hus, description: 'Avtal besøk og gå tur i nærområdet eller lek i hagen.'},
    {title: 'Shopping', img: Shopping, description: 'Kontakt noen å ta med på senteret og la barna gå rundt og leke. Spis på kafè, men ta med noe ekstra de kan gomle på.'},
];

//make the menuImage to change correspondingly according to what you end up with.