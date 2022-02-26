import AbstractNode from "./a-node.mjs";

/**
 * Doubly Linked List data structure.
 * @param data?: Array<AbstractNode> ==> Optional array of nodes for instantiation of the Linked List.
 * @returns The instantiated Linked List data structure.
 */

export default class LinkedList {
    private head: null | AbstractNode;
    private tail: null | AbstractNode;
    getHead;
    getTail;
    setHead;
    insert;
    remove;
    length: number;

    constructor(data?: Array<AbstractNode>) {
        this.head = (data) ? data[0]: null; // init head of Linked List (LL)
        this.tail = (this.head) ? this.head: null; // init tail when the input array is 0 or 1 elements long
        this.length = (this.head) ? 1: 0; // init length to one if at least one node, 0 if <data> param is empty/unused
        

        if(data && data.length > 1 && this.head != null){ // Populate LL if there are multiple elements.
            this.length = data.length;
            this.head.next = data[1] as AbstractNode;
            for(let i = 1; i <= data.length - 1; i++){
                if(i == data.length - 1){ // If it's the last node:
                    data[i].next = null; // the last node's <next> is  null
                    this.tail = data[i]; // the last node is the <tail> of the LL
                } else {
                    data[i].next = data[i + 1] as AbstractNode;
                }
            }
        }
        
        this.getHead = function(): AbstractNode | null {
            return this.head;
        }
        this.getTail = function(): AbstractNode | null {
            return this.tail;
        }

        this.setHead = function(newNode: AbstractNode): void {
            if (this.head){ // if there is already a head node:
                this.head.last = newNode;
                newNode.next = this.head; // link to previos head
                this.head = this.head.last; // make the new node the new head
            } else {
                this.head = newNode;
                this.head.last = null;
                this.tail = this.head;
            }
            

        }

        this.insert = function(value: AbstractNode, index: number): void {
            /**
             * Insert new node at given index.
             * @param value: AbstractNode ==> new node to be inserted.
             * @param index: number ==> position at which to insert the new node.
             * @returns: void
             */
            this.length++;
        }
        this.remove = function(value: AbstractNode): void {
            /**
             * Removes a given node from the Linked List.
             * @param value: AbstractNode ==> node to be removed.
             * @returns: void
             */
            this.length--;
        }

        if (data){
            // populate the linkedList, setting each node's <next> and <last> while cycling thru the data.
        }
        
    }
}