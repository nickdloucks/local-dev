import AbstractNode from "./a-node.mjs";

/**
 * Linked List data structure.
 * @param data?: Array<AbstractNode> ==> Optional array of nodes for instantiation of the Linked List.
 * @returns The instantiated Linked List data structure.
 */

export default class LinkedList {
    private head: null | AbstractNode;
    private tail: null;
    getHead;
    getTail;
    setHead;
    // setTail;
    insert;
    remove;
    length: number;

    constructor(data?: Array<AbstractNode>) {
        this.head = (data) ? data[0]: null;
        this.tail = null;
        this.length = data?.length as number;

        this.getHead = function(): AbstractNode | null {
            return this.head;
        }
        this.getTail = function(): AbstractNode | null {
            return this.tail;
        }

        this.setHead = function(newNode: AbstractNode): void {
            if (this.head){
                newNode.next = this.head; // link to previos head
                this.head = newNode; // make the new node the new head
            } else {
                this.head = newNode;
                // newNode.next = this.tail;

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