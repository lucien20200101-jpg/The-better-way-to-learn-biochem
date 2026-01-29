<template>
  <section class="page">
    <h1>登录</h1>
    <p>此页面为占位，后续将补全功能。</p>
    <el-input v-model="name" placeholder="请输入昵称" class="input" />
    <el-button type="primary" @click="handleLogin">确认登录</el-button>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "../stores/user";

const name = ref("");
const router = useRouter();
const userStore = useUserStore();

const handleLogin = () => {
  if (!name.value.trim()) return;
  userStore.login(name.value.trim());
  router.push("/dashboard");
};
</script>

<style scoped>
.page {
  background: #fff;
  padding: 24px;
  border-radius: 12px;
}

.input {
  max-width: 320px;
  margin: 16px 0;
}
</style>
