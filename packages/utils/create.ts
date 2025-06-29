//BEM规范 什么是BEM规范？
// block代码块  element元素 modifier装饰 state 状态
// h-button  h-button-modifier  h-button--disabled

function _bem(
  prefixName: string,
  blockSuffix: string,
  element: string,
  modifier: string
) {
  if (blockSuffix) {
    prefixName += `-${blockSuffix}`
  }
  if (element) {
    prefixName += `__${element}`
  }
  if (modifier) {
    prefixName += `--${modifier}`
  }
  return prefixName
}

function createBEM(prefixName: string) {
  const n = () => _bem(prefixName, '', '', '')
  const b = (blockSuffix: string) => _bem(prefixName, blockSuffix, '', '')
  const e = (element: string) => _bem(prefixName, '', element, '')
  const m = (modifier: string) => _bem(prefixName, '', '', modifier)

  //   组合
  const be = (blockSuffix: string, element: string) =>
    _bem(prefixName, blockSuffix, element, '')
  const bm = (blockSuffix: string, modifier: string) =>
    _bem(prefixName, blockSuffix, '', modifier)
  const em = (element: string, modifier: string) =>
    _bem(prefixName, '', element, modifier)
  const bem = (blockSuffix: string, element: string, modifier: string) =>
    _bem(prefixName, blockSuffix, element, modifier)

  //   状态
  const is = (name: string, state: boolean) => {
    return state ? `is-${name}` : ''
  }
  return {
    n,
    b,
    e,
    m,
    be,
    em,
    bm,
    bem,
    is,
  }
}

export function createNamespace(name: string) {
  const prefixName = `h-${name}`
  return createBEM(prefixName)
}

// const bem = createNamespace('botton')
// console.log(bem.n())
// console.log(bem.b('box'))
// console.log(bem.e('button'))
// console.log(bem.m('moddfie'))
// console.log(bem.be('box', 'div'))

// z-botton
// z-botton-box
// z-botton__button
// z-botton--moddfie
// z-botton-box__div
