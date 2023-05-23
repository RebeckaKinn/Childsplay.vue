<script>
import FooterMenu from '../components/menuItems/Footer-menu.vue'
import BackButton from '/src/components/Info/BackButton.vue'

export default {
  components: {
    FooterMenu,
    BackButton
  }
}
</script>

<template>
  <div class="settings-page">
    <header>
      <BackButton />
      <div class="header">Settings</div>
    </header>

    <main>
      <div class="setting-menu">
        <a class="setting-button">Add dinner item</a>
        <a class="setting-button">Edit food items</a><br/>
        <a class="setting-button">Add activity</a>
        <a class="setting-button">Edit activities</a><br/>
        <a class="setting-button">Delete to-do list</a>
      </div>
    </main>

    <footer>
      <FooterMenu />
    </footer>
  </div>
</template>


<style scoped>
.settings-page {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

header {
  display: flex;
  align-items: center;
  padding: 16px;
}

div.header {
  font-size: 30px;
}

main {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 40px;
}

.setting-menu {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

a.setting-button {
  display: block;
  padding: 16px;
  background-color: #f0f0f0;
  border-radius: 8px;
  text-decoration: none;
  color: #333;
  font-weight: bold;
  text-align: center;
  border: 1px solid #45d0e2;
}
a.setting-button:hover{
    color: #45d0e2;
}
</style>
