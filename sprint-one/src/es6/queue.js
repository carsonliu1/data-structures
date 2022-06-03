class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {}
    this.queue = 0
    this.length = 0
    this.total = 0
  }

  enqueue(val) {
    this.storage[this.total] = val
    this.total++
    this.length++
  }

  dequeue() {
    if (this.length !== 0) {
      this.length--
    }
    let first = this.storage[this.queue]
    delete this.storage[this.queue]
    this.queue++
    return first
  }

  size() {
    return this.length
  }
}


