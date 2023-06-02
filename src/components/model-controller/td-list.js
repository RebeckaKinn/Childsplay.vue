import { ref } from 'vue';



export const UpdateList = () => {

    let newTask = document.getElementById('task-input').value;

}

export const toDoList = () => {
    let output = '';
    DB_toDoList.forEach(task => {
        output += '<div class="info">${task.description}</div> <div><input type="checkbox" class="info-checkbox"/></div>';
    });
    return output;
}

//dummy DB::

const DB_toDoList = [
    {description: 'Ta oppvasken'},
    {description: 'Handle'},
    {description: 'Gå med hunden'},
    {description: 'Koble opp SQL'},
    {description: 'Få barnevakt i helgen'},
    {description: 'Bestille mat'},
]//ta inn checkbox og få lista til å generere seg. 