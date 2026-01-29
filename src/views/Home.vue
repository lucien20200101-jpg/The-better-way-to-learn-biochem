<template>
  <section class="page">
    <h1>欢迎来到生化学习助手</h1>
    <p>在这里快速进入章节学习、练习测验与代谢网络。</p>
    <div class="cards">
      <ProgressBar />
      <QuizCard />
    </div>
  </section>
</template>

<script setup>
import ProgressBar from "../components/ProgressBar.vue";
import QuizCard from "../components/QuizCard.vue";
</script>

<style scoped>
.page {
  background: #fff;
  padding: 24px;
  border-radius: 12px;
}

.cards {
  margin-top: 20px;
  display: grid;
  gap: 16px;
}
</style>
