import { defineStore } from "pinia";
import { getLocalCache, setLocalCache } from "../utils/cloudbase";

const CACHE_KEY = "biochem-user";

export const useUserStore = defineStore("user", {
  state: () => ({
    profile: getLocalCache(CACHE_KEY, null),
  }),
  getters: {
    isLoggedIn: (state) => Boolean(state.profile),
  },
  actions: {
    login(name) {
      // 这里先使用本地缓存，后续可接入 CloudBase 登录
      this.profile = { name };
      setLocalCache(CACHE_KEY, this.profile);
    },
    logout() {
      this.profile = null;
      setLocalCache(CACHE_KEY, null);
    },
  },
});
