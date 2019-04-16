// 1. 扩展window.onload函数

// 之前绑定的window.onload
window.onload = function() {
  console.log(1)
}

// 保存之前的window.onload
let _onload = window.onload

// 扩展的window.onload
window.onload = function() {
  _onload() // 执行之前绑定的方法
  console.log(2) // 扩展新的方法
}

// 2. AOP装饰函数

// before
Function.prototype.before = function(beforeFn) {
  let _self = this // 保存原函数的引用
  return function() {
    beforeFn.apply(this, arguments)
    return _self.apply(this, arguments)
  }
}

// after
Function.prototype.after = function(afterFn) {
  let _self = this
  return function() {
    let res = _self.apply(this, arguments)
    afterFn.apply(this, arguments)
    return res
  }
}

//应用
window.onload = (window.onload || function() {}).after(function() {
  console.log(2)
}).after(function() {
  console.log(3)
})