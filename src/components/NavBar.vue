<template>
  <header class="nav-bar">
    <div class="logo">生化学习助手</div>
    <el-menu
      class="nav-menu"
      mode="horizontal"
      :default-active="activePath"
      router
    >
      <el-menu-item index="/">首页</el-menu-item>
      <el-menu-item index="/dashboard">学习概览</el-menu-item>
      <el-sub-menu index="chapters">
        <template #title>章节学习</template>
        <el-menu-item index="/chapters/glycolysis">糖酵解</el-menu-item>
        <el-menu-item index="/chapters/tca">三羧酸循环</el-menu-item>
        <el-menu-item index="/chapters/etc">电子传递链</el-menu-item>
        <el-menu-item index="/chapters/ppp">磷酸戊糖途径</el-menu-item>
        <el-menu-item index="/chapters/fa-oxidation">脂肪酸氧化</el-menu-item>
        <el-menu-item index="/chapters/fa-synthesis">脂肪酸合成</el-menu-item>
        <el-menu-item index="/chapters/amino-acid">氨基酸代谢</el-menu-item>
        <el-menu-item index="/chapters/nucleotide">核苷酸代谢</el-menu-item>
      </el-sub-menu>
      <el-menu-item index="/quiz">练习测验</el-menu-item>
      <el-menu-item index="/wrongbook">错题本</el-menu-item>
      <el-menu-item index="/network">代谢网络</el-menu-item>
    </el-menu>
    <el-button class="auth-button" type="primary" @click="handleAuth">
      {{ authLabel }}
    </el-button>
  </header>
</template>

<script setup>
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useUserStore } from "../stores/user";

const route = useRoute();
const router = useRouter();
const userStore = useUserStore();

const activePath = computed(() => route.path);
const authLabel = computed(() => (userStore.isLoggedIn ? "退出" : "登录"));

const handleAuth = () => {
  if (userStore.isLoggedIn) {
    userStore.logout();
    router.push("/");
  } else {
    router.push("/login");
  }
};
</script>

<style scoped>
.nav-bar {
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 12px 24px;
  background-color: #ffffff;
  border-bottom: 1px solid #e4e7ed;
}

.logo {
  font-weight: 600;
  font-size: 18px;
  color: #409eff;
}

.nav-menu {
  flex: 1;
}

.auth-button {
  margin-left: auto;
}
</style>
