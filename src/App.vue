<template>
  <div class="app-shell">
    <NavBar />
    <main class="app-main">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import NavBar from "./components/NavBar.vue";
</script>

<style scoped>
.app-shell {
  min-height: 100vh;
  background-color: #f5f7fb;
}

.app-main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px 16px 40px;
}
</style>
