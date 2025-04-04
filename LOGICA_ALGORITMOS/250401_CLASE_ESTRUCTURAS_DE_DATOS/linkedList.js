class LinkedListNode{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
class LinkedList{
    
    constructor(data){
        this.head = new LinkedListNode();
        this.head.data = data;
    }
    appendElement(node){
        if (this.head.next === null){
            this.head.next = node;
            return;
        }
        let currentNode = this.head.next;
        while (currentNode.next !== null){
            currentNode = currentNode.next;
        }
        currentNode.next = node;
    }

    printAllData(){
        let currentNode = this.head;
        while (currentNode !== null){
            console.log(currentNode.data);
            currentNode = currentNode.next;
        }
    }
}

const node1 = new LinkedListNode(2);
const node2 = new LinkedListNode(5);

console.log (node1, node2);

node1.next= node2;

console.log(node1);

// Lista enlazada
 console.log("-------");
 const myLinkedList = new LinkedList(5);
 myLinkedList.appendElement(new LinkedListNode(8));
 myLinkedList.appendElement(new LinkedListNode(15));
 myLinkedList.appendElement(new LinkedListNode(120));
 myLinkedList.printAllData();
 console.log(myLinkedList);


