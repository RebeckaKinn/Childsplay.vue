<script setup>
import TestImg from '/src/img/mustache_cat.jpg'
//PROBLEM WARNING WEE WOO WEE WOO
</script>

<template>
  <nav class="main-menu">

    <div class="menu-item">
      <ul>Dinnerplan</ul>

      <div>
        <router-link to="/dinnerchooser">
          <img :src="TestImg" alt="testImage" class="menu-image">
        </router-link>  
      </div>
          
    </div>
    <div class="menu-item">
      <ul>Activity</ul>
      <div>
        <router-link to="/activitychooser">
          <img :src="TestImg" alt="testImage" class="menu-image">
        </router-link>
      </div>

    </div>
    
  </nav>
</template>



<style scoped>

.main-menu {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
  padding: 40px;
  border-radius: 10px;
}

.menu-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}

.menu-item ul {
  font-size: 25px;
  list-style-type: none;
  padding: 0;
  margin: 0;
  text-align: center;
}

.menu-item div {
  margin-top: 10px;
  
}

</style>