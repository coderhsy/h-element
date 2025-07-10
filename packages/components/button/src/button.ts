import type { Component } from 'vue'

type TType =
  | 'primary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'
  | 'mypink'
  | ''
type TSize = 'large' | 'default' | 'small'

export interface IButton {
  type?: TType
  size?: TSize
  round?: string
  tag?: string
  icon?: Component
  iconColor?: string
  loading?: boolean
  loadingIcon?: Component
  disabled?: boolean
}

export interface IButtonEmit {
  click: (e: Event) => Event
}

// export type ButtonEmits = typeof IButtonEmit
