class SLL {
    constructor(){
        this.head = null;
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
}

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
