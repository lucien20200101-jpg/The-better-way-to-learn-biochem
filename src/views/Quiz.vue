<template>
  <section class="page">
    <h1>练习测验</h1>
    <p>请选择章节并开始答题。</p>
    <QuizCard />
  </section>
</template>

<script setup>
import QuizCard from "../components/QuizCard.vue";
</script>

<style scoped>
.page {
  background: #fff;
  padding: 24px;
  border-radius: 12px;
}
</style>
