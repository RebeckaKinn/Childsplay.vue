import axios from 'axios';
import { ref, reactive } from 'vue';

export const url = 'http://localhost:5121';

export const DB_food = reactive([]);

export const DB_activity = reactive([]);

export let rndMenuItems = ref({
    name: '',
    description: '',
    img: null,
    id: null,
});

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


export const fetchData = async () => {
    await Promise.all([fetchDinner(), fetchActivity()]);
}

export const fetchActivity = async () => {
    try {
        console.log('Fetching activity...');
        const response = await axios.get(`${url}/inner-menu/activity`);
        console.log(response);

        DB_activity.length = 0;

        response.data.forEach(item => {
            DB_activity.push({
                name: item.name,
                description: item.description,
                img: item.img,
                id: item.id,
            });
        });

        console.log('Activity-list: ', DB_activity);
        return DB_activity;
    } catch (error) {
        console.error(error);
        return [];
    }
  };

export const fetchDinner = async () => {
    try {
        console.log('Fetching dinner...');
        const response = await axios.get(`${url}/inner-menu/dinner`);
        console.log(response);

        DB_food.length = 0;

        response.data.forEach(item => {
            DB_food.push({
                name: item.name,
                description: item.description,
                img: item.img,
                id: item.id,
            });
        });

        console.log('Dinner-list: ', DB_food);
        return DB_food;
    } catch (error) {
        console.error(error);
        return [];
    }
  };



export const rndMenuInfo = (Rnd_array) => {
    let rndIndex = Math.floor(Math.random() * Rnd_array.length);
    if(lastIndex === rndIndex) {
        rndIndex = rndIndex === Rnd_array.length ? rndIndex -1 : rndIndex +1;
    }
    lastIndex = rndIndex;

    console.log('RndArray navn: ' + Rnd_array[rndIndex].name);

    rndMenuItems.value.name = Rnd_array[rndIndex].name;
    rndMenuItems.value.description = Rnd_array[rndIndex].description;
    rndMenuItems.value.img = Rnd_array[rndIndex].img;
    rndMenuItems.value.id = Rnd_array[rndIndex].id;

    console.log('rndMenuItems navn: ' + rndMenuItems.value.name)
}

//klarer ikke få ut info på name / title. A VUE problem, not backend. 

export const changeMenuImage = (key) => {
    if (key === 'dinnerRnd') {
      dinner.value.state = true;
      dinner.value.img = rndMenuItems.value.img;
    }
    if (key === 'activityRnd') {
      activity.value.state = true;
      activity.value.img = rndMenuItems.value.img;
    }
  };

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