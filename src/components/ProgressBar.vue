<template>
  <div class="progress-card">
    <div class="progress-header">
      <span>本周学习进度</span>
      <span>{{ percent }}%</span>
    </div>
    <el-progress :percentage="percent" />
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useProgressStore } from "../stores/progress";

const progressStore = useProgressStore();
const percent = computed(() => progressStore.weeklyPercent);
</script>

<style scoped>
.progress-card {
  padding: 16px;
  border-radius: 12px;
  background-color: #fff;
}

.progress-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  font-weight: 500;
}
</style>
