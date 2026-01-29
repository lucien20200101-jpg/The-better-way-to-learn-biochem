<template>
  <section class="page">
    <h1>学习概览</h1>
    <p>此页面为占位，后续将补全功能。</p>
    <ProgressBar />
    <PathwayDiagram class="diagram" />
  </section>
</template>

<script setup>
import ProgressBar from "../components/ProgressBar.vue";
import PathwayDiagram from "../components/PathwayDiagram.vue";
</script>

<style scoped>
.page {
  background: #fff;
  padding: 24px;
  border-radius: 12px;
}

.diagram {
  margin-top: 16px;
}
</style>
