class BinarySearchTree {
    constructor() {
        this._root = null;
    }
    contains(value) {
        var found = false,
            current = this._root
        while(!found && current){
            if (value < current.value){
                current = current.left;
            } else if (value > current.value){
                current = current.right;
            } else {
                found = true;
            }
        }
        return found;
    }
    add(value){
        var node = {
            value: value,
            left: null,
            right: null
        },
        current;
        if (this._root === null){
            this._root = node;
        } else {
            current = this._root;
            while(true) {
                if (value < current.value){
                    if (current.left === null){
                        current.left = node;
                        break;
                    } else {
                        current = current.left;
                    }
                } else if (value > current.value){
                    if (current.right === null){
                        current.right = node;
                        break;
                    } else {
                        current = current.right;
                    }
                } else {
                    break;
                }
            }
        }
    }
    traverse(process) {
        function inOrder(node){
            if (node){
                //traverse the left subtree
                if (node.left !== null){
                    inOrder(node.left);
                }            
                //call the process method on this node
                process.call(this, node);
                //traverse the right subtree
                if (node.right !== null){
                    inOrder(node.right);
                }
            }
        }
        //start with the root
        inOrder(this._root);
    }
    size(){
        var length = 0;
        this.traverse(function(node){
            length++;
        });
        return length;
    }
    toArray(){
        var result = [];
        this.traverse(function(node){
            result.push(node.value);
        });
        return result;
    }
    toString(){
        return this.toArray().toString();
    },
};