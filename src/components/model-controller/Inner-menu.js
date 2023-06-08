
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

export const activity = ref(
    {img: null, state: false},
);
export const dinner = ref(
    {img: null, state: false},
);

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

    rndMenuItems.value.title = Rnd_array[rndIndex].title;
    rndMenuItems.value.description = Rnd_array[rndIndex].description;
    rndMenuItems.value.img = Rnd_array[rndIndex].img;
}

export const changeMenuImage = (key) => {
    if (key === 'dinnerRnd') {
        dinner.value.state = true;
        dinner.value.img = rndMenuItems.value.img;
        return dinner.value.img;
    }
    if (key === 'activityRnd') {
        activity.value.state = true;
        activity.value.img = rndMenuItems.value.img;
        return activity.value.img;
    }
    return;
}

//nå fungerer det å bytte bildet i forhold til valgt middag eller aktivitet.
//samt det er random før man velger. GOOOD
//Nå må det bli oppdatert dynamisk. Real time-update. NB google that shit. 

export const menuImage = (key) => {
  let Rnd_array = key === 'dinnerRnd' ? DB_food : DB_activity
  let rndNumber = Math.floor(Math.random() * Rnd_array.length)

  if (key === 'dinnerRnd' && !dinner.value.state) {
    dinner.value.img = Rnd_array[rndNumber].img
    return dinner.value.img;
  }
  if (key === 'activityRnd' && !activity.value.state) {
    activity.value.img = Rnd_array[rndNumber].img
    return activity.value.img;
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