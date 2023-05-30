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
    </main>
</div>
    <footer>
        <FooterMenu/>
    </footer>
</template>


<style scoped>
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