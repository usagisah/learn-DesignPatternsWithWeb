/* 
  将一个请求封装为一个对象，从而使你可用不同的请求对客户进行参数化，对请求排队或记录请求日志，以及支持可撤销的操作
  具体行为看下边的例子
*/

class Operation {
  constructor() {}

  add() {}
  remove() {}
  find() {}

  command(type, ...args) {
    return this[type](...args)
  }
}
const op = new Operation()
// 普通使用
op.add()
op.remove()
op.find()

// 指令模式
op.command("add", 1, 2)
