<script setup>
import TestImg from '/src/img/mustache_cat.jpg'
</script>

<template>
  <nav class="main-menu">
    <div class="menu-item">
      <ul>Dinnerplan</ul>
      <div><img :src="TestImg" alt="testImage" class="menu-image"></div>
    </div>
    <div class="menu-item">
      <ul>Activity</ul>
      <div><img :src="TestImg" alt="testImage" class="menu-image"></div>
    </div>
  </nav>
</template>



<style scoped>
.menu-image{
    height: 250px; 
    width: auto; 
    border-radius: 80px;
}
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