class Sll {
    constructor() {
        this._root = null;
    }
    push(val) {
        const node = {
            val: val,
            next: null
        }
        let current;
        if(!this._root) this._root = node;
        else {
            current = this._root;
            while(current.next) {
                current = current.next;
            }
            current.next = node;
        }
    }
}

var sll = new Sll();
sll.push(1);
sll.push(2);

console.log(sll._root);
