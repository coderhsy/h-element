// import { definePropType } from "@hsy/utils";
// import { ExtractPropTypes } from "vue";

// 定义props的类型
// const iconProps = {
//   size: {
//     type: definePropType<string | number>([Number, String]),
//   },
//   color: {
//     type: String,
//   },
// } as const;

// // ExtractPropTypes抽取类型能适配props的类型
// export type IconProps = ExtractPropTypes<typeof iconProps>;

export interface IconProps {
  size?: number | string;
  color?: string;
}
