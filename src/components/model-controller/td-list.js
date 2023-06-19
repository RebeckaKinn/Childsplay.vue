import axios from 'axios';
import { ref } from 'vue';

const url = 'http://localhost:5121';

export let tasks = ref([]);

export const fetchTasks = async () => {
    try {
        console.log('Fetching tasks...');
        const response = await axios.get(`${url}/to-do-list`);
        console.log(response);
  
        tasks = ref(response.data.map(task => ({
            id: task.id,
            description: task.task,
            done: task.isCompleted,
        })));
        
        console.log('Fetched tasks:', tasks.value);
        return tasks;
    } catch (error) {
        console.error(error);
        return [];
    }
  };
//NEED REWORK
export const UpdateList = async(newTask) => {
    try{
        console.log('Adding tasks...');
        const response = await axios.post(`${url}/to-do-list`, {task: newTask});
        console.log(response);
    } catch (error){
        console.log(error);
        return;
    }

}

export const deleteListData = async() => {
    try{
        console.log('Deleting tasks...');
        const response = await axios.delete(`${url}/settings`);
        console.log(response);
    } catch (error){
        console.log(error);
        return;
    }
}

//the update bool value needs to be added. 
