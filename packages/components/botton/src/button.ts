type TType =
  | 'primary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'
  | 'mypink'
  | ''
type TSize = 'large' | 'default' | 'small'

export interface IBotton {
  type?: TType
  size?: TSize
  round?: string
  tag?: string
}
