class MyStack {
    constructor() {
        this.stack = [];
    }
    push(val) {
        this.stack.push(val);
        return this.stack;
    }
    pop() {
        this.stack.pop();
        return this.stack;
    }
}

const s = new MyStack();
console.log(s.push(1));
console.log(s.push(2));
console.log(s.push(3));
console.log(s.push(4));
console.log(s.pop());