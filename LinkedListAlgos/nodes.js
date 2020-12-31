class SLL {
    constructor(){
        this.head = null;
    }

    isEmpty() {
        if(this.head === null) {
            return true;
        }
        else {
            return false;
        }
    }

    addToFront(node) {
        node.next = this.head;
        this.head = node;
    }

    addDataToFront(data) {
        var node = new Node(data);
        node.next = this.head;
        this.head = node;
    }

    removeFromFront() {
        if(this.isEmpty) return null;

        var removed = this.head;
        this.head = removed.next;
        removed.next = null;
        return removed;
    }
}

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
