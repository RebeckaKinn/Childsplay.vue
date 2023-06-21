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
            isCompleted: task.isCompleted,
            date: task.date,
            done: task.done,
        })));

        console.log('Fetched tasks:', tasks.value);
        return tasks;
    } catch (error) {
        console.error(error);
        return [];
    }
  };

export const UpdateList = async (newTask) => {
    try {
      console.log('Adding tasks...');
      const response = await axios.post(`${url}/to-do-list`, null, {
        params: {
          task: newTask
        }
      });
      console.log(response);
    } catch (error) {
      console.log(error);
      return;
    }
  };



  export const toggleIsCompleted = async(task) => {
      try{
        console.log('Toggle tasks...' + task.isCompleted);
        //task.isCompleted = !task.isCompleted;
        console.log(task)
        const response = await axios.put(`${url}/to-do-list`, JSON.stringify(task), {
            headers: {
              'Content-Type': 'application/json',
            },
          });
          console.log(response);
          return response;
        } catch (error){
            console.log(error);
            return;
        }
    };
    //klarer ikke å oppdatere bool
    


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
