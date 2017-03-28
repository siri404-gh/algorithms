class Dll {
    constructor() {
        this._root = null;
    }
    push(val) {
        let node = {
            val: val,
            next: null,
            previous: null
        };
        let current;
        let previous;
        if(!this._root) this._root = node;
        else {
            current = this._root;
            while(current.next) {
                // previous = current;
                current = current.next;
            }
            current.next = { val: val, previous: current, next: null };
        }
        console.log(this._root);
    }
}

var dll = new Dll();
dll.push(1);
dll.push(2);
dll.push(3);
dll.push(4);
dll.push(5);