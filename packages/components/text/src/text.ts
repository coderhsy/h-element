type TType =
  | 'primary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'
  | 'mypink'
  | ''
type TSize = 'large' | 'default' | 'small'

export interface ITextProps {
  readonly type?: TType
  readonly size?: TSize | string
  // 默认元素
  readonly tag?: string
  // 控制省略点
  readonly truncated?: boolean
  // 控制显示几行
  lineClamp?: number | string
}
