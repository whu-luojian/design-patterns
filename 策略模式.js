// 年终奖计算策略
let strategies = {
  // 绩效为S年终奖为工资的四倍
  'S': function(salary) {
    return salary * 4
  },
  'A': function(salary) {
    return salary * 3
  },
  'B': function(salary) {
    return salary * 2
  }
}


/**
 * 奖金计算
 * @param {String} level 绩效
 * @param {Number} salary 月工资
 */
let calculateBonus = function(level, salary) {
  return strategies[level](salary)
}