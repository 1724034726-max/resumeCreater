export const AppRoutes = {
  /** 登录 */
  LOGIN: "/login",
  /** layout */
  LAYOUT: "/",
  /** 首页 */
  HOME: "/home",
} as const;
/** 默认首页 */
export const DEFAULT_HOME_PATH = AppRoutes.HOME;
