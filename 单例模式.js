/**
 * 管理单例的逻辑，返回生成单例对象的函数
 * @param {Function} fn 创建对象的函数
 */
let getSingleton = function(fn) {
  let instance = null
  return function() {
    if (!instance) {
      instance = fn.apply(this, arguments)
    }
    return instance
  }
}

/**
 * 创建一个登录窗，并返回这个登录div
 */
let createLoginLayer = function() {
  let div = document.createElement('div')
  div.innerHTML = '我是登录浮窗'
  div.style.display = 'none'
  document.body.appendChild(div)
  return div
}

// 应用
let createSingLoginLayer = getSingleton(createLoginLayer)
let a = createSingLoginLayer()
let b = createSingLoginLayer()
console.log(a === b) // true