import AbstractNode from "./a-node.mjs";

export default class LinkedList {
    private head: null | AbstractNode;
    private tail: null;
    getHead;
    getTail;
    setHead;
    // setTail;

    constructor(data?: Array<AbstractNode>){
        this.head = (data) ? data[0]: null;
        this.tail = null;

        this.getHead = function(): AbstractNode | null{
            return this.head;
        }
        this.getTail = function(): AbstractNode | null{
            return this.tail;
        }

        this.setHead = function(newNode: AbstractNode): void{
            if (this.head){
                newNode.next = this.head;
                this.head = newNode;
            } else {
                this.head = newNode;
                // newNode.next = this.tail;

            }
            

        }
       

        if (data){
            // populate the linkedList, setting each node's <next> and <last> while cycling thru the data.
        }
        
    }
}