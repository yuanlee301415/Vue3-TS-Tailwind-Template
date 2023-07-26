/// <reference types="vite/client" />

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface ImportMetaEnv {
  // APP Title
  readonly VITE_APP_TITLE: string;

  // API 前缀
  readonly VITE_BASE_API: string;

  // 是否检查用户权限
  readonly VITE_PERMISSION: string;
}

// 由 Vite define 注入的全局常量
declare const __APP_VERSION__: string
declare const __APP_BUILD_TIME__: string
