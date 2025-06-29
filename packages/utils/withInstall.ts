// 导入vue实现的install方法函数
import { Plugin, App } from "vue";

// 给每个组件实现一个install方法函数 注册全局组件 再调用全局组件是app.use会自动调用install
export type withType<T> = T & Plugin;
export function withInstall<T>(comp: T) {
  (comp as withType<T>).install = function (app: App) {
    const { name } = comp as { name: string };
    app.component(name, comp);
  };
  return comp as withType<T>;
}
