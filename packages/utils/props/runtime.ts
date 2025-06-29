import type { PropType } from "vue";

// 更好的标注表达复杂类型
export function definePropType<T>(val: any): PropType<T> {
  return val;
}
