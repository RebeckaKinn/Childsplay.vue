

export const toDoList = () => {
    return DB_toDoList;
}

export const UpdateList = () => {

    let newTask = document.getElementById('task-input').value;
    if(newTask === '' || null) return;
    let newId = DB_toDoList.length * 2;
    DB_toDoList.push(
        {description: newTask,
        id: newId,
        done: false
        },
    );
}

export const deleteListData = () => {
    DB_toDoList.splice(0);
}

//dummy DB::

const DB_toDoList = [
    {description: 'Ta oppvasken', id: 0, done: false},
    {description: 'Handle', id: 1, done: false},
    {description: 'Gå med hunden', id: 2, done: false},
    {description: 'Koble opp SQL', id: 3, done: false},
    {description: 'Få barnevakt i helgen', id: 4, done: false},
    {description: 'Bestille mat', id: 5, done: false},
    {description: 'Pakke til helgen', id: 6, done: true},
]
