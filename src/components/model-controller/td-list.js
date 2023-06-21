import axios from 'axios';
import { reactive } from 'vue';

const url = 'http://localhost:5121';

export const tasks = reactive([]);

export const fetchTasks = async () => {
    try {
        console.log('Fetching tasks...');
        const response = await axios.get(`${url}/to-do-list`);
        console.log(response);

        tasks.length = 0;
  
        response.data.forEach(task => {
            tasks.push({
              id: task.id,
              description: task.task,
              isCompleted: task.isCompleted,
              date: task.date,
              done: task.done,
            });
          });

        console.log('Fetched tasks:', tasks);
        return tasks;
    } catch (error) {
        console.error(error);
        return [];
    }
  };

  export const UpdateList = async (newTask) => {
    try {
        console.log('Adding task...');
        const response = await axios.post(`${url}/to-do-list`, null, {
        params: {
            task: newTask
        }
        });
  
        console.log(response);
        await fetchTasks(); 
        return tasks;
    } catch (error) {
        console.log(error);
        return;
    }
  };


export const toggleIsCompleted = async(task) => {
    try{
        const response = await axios.put(`${url}/to-do-list`, JSON.stringify(task), {
        headers: {
            'Content-Type': 'application/json',
        },
        });
        console.log(response);

        task.isCompleted = !task.isCompleted;
        return response;
    } catch (error){
        console.log(error);
        return;
    }
};

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
