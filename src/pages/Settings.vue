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
      <p>Settings</p>
    </header>

    <main>
      <div class="setting-menu">
        <a class="setting-button">Add dinner item</a>
        <a class="setting-button">Edit food items</a>
        <a class="setting-button">Add activity</a>
        <a class="setting-button">Edit activities</a>
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

p {
  font-size: 30px;
font-family: Consolas;
}

main {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.setting-menu {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
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
}
</style>
