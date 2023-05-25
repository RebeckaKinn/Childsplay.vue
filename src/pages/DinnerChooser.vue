<script setup>
import TestImg from '/src/img/mustache_cat.jpg'
//PROBLEM WARNING WEE WOO WEE WOO
</script>

<template>
    <div class="dinner-page">
        <header>
            <div class="header">Dinner of the day is...</div>
        </header>

        <main>
            <p class="title">Title: Me.</p>
            <p class="description">Description: I am the dinner.</p>
            <div>
                <img :src="TestImg" alt="testImage" class="menu-image">
            </div>
        
        </main>
    </div>

    <footer>
            <div class="button-links">
                <router-link to="/dinnerchooser" class="button first-button">Give me another</router-link>
                <router-link to="/" class="button second-button">OK!</router-link>
            </div>
    </footer>
</template>


<style scoped>
.dinner-page{
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
}

main{
    margin: 10px;
    font-family: Arial;
}

.title{
    font-size: 25px;
}

.button-links {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #45d0e2;
    margin-bottom: 20px;
}

.button-links .button {
  font-weight: bold;
  font-family: Century Gothic;
  cursor: pointer;
  text-decoration: none;
  margin: 10px;
  padding-top: 20px;
  background-color: #f0f0f0;
  padding: 25px;
  border-radius: 50px;
}

.first-button{
    font-size: 20px;
    color: #333;
    border: 1px solid #45d0e2;
}

.second-button{
    font-size: 30px;
    color:rgb(48, 151, 48);
    border: 1px solid rgb(48, 151, 48)
}

.button-links .button:hover {
  color: #45d0e2;
}
</style>