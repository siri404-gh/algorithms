class MyQueue {
    constructor(q) {
        this.queue = q;
    }
    push(val) {
        this.queue.push(val);
        return this.queue;
    }
    pop() {
        this.queue.shift();
        return this.queue;
    }
};

var q = new MyQueue([1,2,3]);
q.push(4);
console.log(q.pop());