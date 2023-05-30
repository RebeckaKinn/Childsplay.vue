<script setup>
import FooterMenu from '../components/menuItems/Footer-menu.vue'
import BackButton from '../components/Info/BackButton.vue'
</script>

<template>
<div class="container">
    <header>
        <BackButton/>
        <div class="default-header">
            To Do List
        </div>
    </header>

    <main class="todo-main">
        <section class="todo-grid">
                <div class="info">description: task from DB</div>
                <div><input type="checkbox" class="info-checkbox"/></div>
        </section>
    <div class="todo-button-link">
        <router-link to="/" class="todo-add-task-button">Add task</router-link>
    </div>
    </main>
</div>
    <footer>
        <FooterMenu/>
    </footer>
</template>


<style scoped>
.todo-button-link{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.todo-button-link .todo-add-task-button{
    font-family: Century Gothic;
    cursor: pointer;
    text-decoration: none;
    font-weight: bold;
    margin-top: 10px;
    background-color: #45d0e2;
    padding: 7px;
    padding-left: 15px;
    padding-right: 15px;
    border-radius: 30px;
    font-size: 18px;
    color: #333;
}
.todo-main{
    margin-top: 20px;
}
.todo-grid{
    display: grid;
    background-color: #f0f0f0;
    border-radius: 10px;
    padding: 10px;
    grid-template-columns: 320px auto;
    grid-template-rows: auto;
    grid-template-areas:
        'info checkbox';
}
.todo-grid .info{
    grid-area: info;
    font-size: 20px;
    border-bottom: 1px solid #45d0e2;
    padding-left: 5px;
    padding-top: 4px;
}
.todo-grid .info-checkbox{
    grid-area: checkbox;
    justify-self: center;
    height: 30px;
    width: 30px;
}
</style>

/*.checkbox havner ikke i grid aeria som valgt. WHY */