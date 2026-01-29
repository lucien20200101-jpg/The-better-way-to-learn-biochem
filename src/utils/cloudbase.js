import cloudbase from "@cloudbase/js-sdk";

let appInstance = null;

// 初始化 CloudBase，如果环境变量缺失则返回 null
export const initCloudbase = () => {
  if (appInstance) return appInstance;
  const env = import.meta.env.VITE_CLOUDBASE_ENV;
  if (!env) return null;
  try {
    appInstance = cloudbase.init({ env });
    return appInstance;
  } catch (error) {
    console.warn("CloudBase 初始化失败，改用本地存储。", error);
    return null;
  }
};

// 本地存储兜底，保证无 CloudBase 时不崩溃
export const getLocalCache = (key, fallback = null) => {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch (error) {
    console.warn("读取本地缓存失败。", error);
    return fallback;
  }
};

export const setLocalCache = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.warn("写入本地缓存失败。", error);
  }
};
