import { defineStore } from "pinia";
import { getLocalCache, setLocalCache } from "../utils/cloudbase";

const CACHE_KEY = "biochem-progress";

export const useProgressStore = defineStore("progress", {
  state: () => ({
    weeklyPercent: getLocalCache(CACHE_KEY, 35),
  }),
  actions: {
    updateWeeklyPercent(value) {
      this.weeklyPercent = value;
      setLocalCache(CACHE_KEY, value);
    },
  },
});
