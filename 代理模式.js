// 虚拟代理实现图片预加载

/**
 * 本体图片
 */
let myImage = (function() {
  let imgNode = document.createElement('img')
  document.body.appendChild(imgNode)

  return function(src) {
    imgNode.src = src
  }
})()

/**
 * 预加载图片，记载完成设置myImage
 */
let proxyImage = (function() {
  let img = new Image
  let targetSrc = ""
  img.onload = function() {
    myImage(targetSrc) // 图片加载完成填充到本体
  }

  return function(src) {
    targetSrc = src
    myImage('file:///C:Desktop/loading.gif') // 本地loading占位
    img.src = src
  }
})()

// 使用
proxyImage('http://www.qq.com/xxx.png')