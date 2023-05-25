
<template>
    <nav class="footerMenu">
        <ul>

        <router-link to="/">
            <button>Home</button>
        </router-link>
        
        <router-link to="/to-do-list">
            <button>To-Do list</button>
        </router-link>

        <router-link to="/settings">
            <button>Settings</button>
        </router-link>

        </ul>
    </nav>
</template>

<style scoped>
.footerMenu{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 10px 0;
    background-color: #f0f0f0;
    padding-bottom: 30px;
    border-top: 2px solid #45d0e2;
}
.footerMenu ul{
    display: flex;
    justify-content: space-around;
    list-style-type: none;
    margin: 0;
    padding: 0;
}
.footerMenu button{
    color: #333;
    font-weight: bold;
    font-size: 20px;
    padding: 8;
    border: none;
    background: none;
    font-family: Century Gothic;
    cursor: pointer;
}
.footerMenu button:hover{
    color: #45d0e2;
}
</style>