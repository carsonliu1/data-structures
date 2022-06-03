class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.stack = 0
    this.length = 0
    this.count = 0
    this.storage = {}
  }
  push(val) {
    this.storage[this.count] = val
    this.count++
    this.length++
    this.stack = this.count - 1
  }

  pop() {
    if (this.length !== 0) {
      this.length--
    }

    let last = this.storage[this.stack]
    delete this.storage[this.stack]
    this.stack--
    return last
  }

  size() {
    return this.length
  }
}