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
        <table class="todo-grid">
            <tr>
                <td class="info">description</td>
                <td><input type="checkbox" class="checkbox"/></td>
            </tr>
        </table>
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
    grid-template-columns: 355px auto;
    border: 1px solid #c5c5c5;;
    padding: 5px;
    grid-template-rows: auto;
    grid-template-areas:
        'info checkbox';
}
.todo-grid .info{
    grid-area: info;
    font-size: 20px;
    border: 1px solid #ff0000;;
}
.todo-grid .checkbox{
    grid-area: checkbox;
    height: 30px;
    width: 30px;
}
</style>

/*.checkbox havner ikke i grid aeria som valgt. WHY */