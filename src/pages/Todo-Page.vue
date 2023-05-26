<script setup>
import FooterMenu from '../components/menuItems/Footer-menu.vue'
import BackButton from '../components/Info/BackButton.vue'
</script>

<template>
    <header>
        <BackButton/>
        <div class="default-header">
            To Do List
        </div>
    </header>

    <main>
        <table class="todo-grid">
            <div class="info">description</div>
            <input type="checkbox" class="checkbox"/>
        </table>
    </main>

    <footer>
        <FooterMenu/>
    </footer>
</template>


<style scoped>
.todo-grid{
    display: grid;
    grid-template-columns: 350px auto;
    border: 1px solid #c5c5c5;;
    grid-template-rows: auto;
    grid-template-areas:
        'info checkbox';
}
.todo-grid .info{
    grid-area: info;
    border: 1px solid #3c009c;;
}
.todo-grid .checkbox{
    grid-area: checkbox;
    
    border: 1px solid #00c220;;
}
</style>