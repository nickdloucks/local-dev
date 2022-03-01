import AbstractNode from "./a-node.mjs";

/**
 * Doubly Linked List data structure.
 * @param data?: Array<AbstractNode> ==> Optional array of nodes for instantiation of the Linked List.
 * @returns The instantiated Linked List data structure.
 */

export default class LinkedList {
    private head: null | AbstractNode;
    private tail: null | AbstractNode;
    readonly getHead;
    readonly getTail;
    private _insertHead; // private subroutine that could be used by <insert> method
    private _insertTail; // private subroutine that could be used by <insert> method
    private _delHead;
    private _delTail;
    public insert;
    public remove;
    public absorb;
    public getNodeAtIndex;
    private length: number;

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
                    // add link to previous node in LL
                }
            }
        }
        
        this.getHead = function(): AbstractNode | null {
            return this.head;
        }
        this.getTail = function(): AbstractNode | null {
            return this.tail;
        }

        this._insertHead = function(newNode: AbstractNode): void {
            if (this.head){ // if there is already a head node:
                this.head.last = newNode;
                newNode.next = this.head; // link to previos head
                this.head = newNode; // make the new node the new head
                this.head.last = null;
            } else { // if no current head, the new node will be both the head and the tail
                this.head = newNode;
                this.head.last = null;
                this.tail = this.head;
                this.head.next = null;
            }
            this.length++;
        }

        this._insertTail = function(value: AbstractNode): void{
            if(this.tail){
                let oldTail = this.tail;
                oldTail.next = value;
                value.last = oldTail;
                this.tail = value;
                this.tail.next = null;
                this.length++;
            } else{ // if there is no tail, the LL is empty, so insert new value at head
                this._insertHead(value);
            }     
        }

        this.insert = function(value: AbstractNode, index: number): number {
            /**
             * Insert new node at given index.
             * @param value: AbstractNode ==> new node to be inserted.
             * @param index: number ==> position at which to insert the new node.
             * @returns: void
             */
            if (index == 0){
                this._insertHead(value);
                return this.length;
            }else if(index > this.length - 1){
                this._insertTail(value);
                return this.length;
            }else{
                let currentNode = this.head;
                for(let i = 0; i < index; i++){
                    // currentNode = currentNode?.next;
                }
            }
            // loop thru vals until you reach the index right before insert position 
                //(if index is 0, call setHead method instad)
            // 
            this.length++;
            return this.length
        }

        this._delHead = function(){

        }
        this._delTail = function(){

        }

        this.remove = function(value: AbstractNode): void {
            /**
             * Removes a given node from the Linked List.
             * @param value: AbstractNode ==> node to be removed.
             * @returns: void
             */
            this.length--;
        }

        this.getNodeAtIndex = (index: number): AbstractNode | undefined => {
            if(index >= this.length || index < 0){
                return undefined; // do not search if index param is out of bounds of this LL
            }

            // Since this is a doubly linked list and searching by numeric index/position is an inherently "ordered" operation,
            // I have optimized the <getNodeAtIndex> method to use a binary-search pattern to lower the algorithmic complexity.
            // Each of the following two subroutines handles searching the correct half of the LL based on the <index> parameter.
            const searchFirstHalf = (): AbstractNode => { // Arrow function used so that <this> keyword will refer to
                // the current instance of LinkedList, rather than the <searchFirstHalf> function.
                let currentNode = this.getHead();
                for(let i = 0; i < index; i++){
                    currentNode = currentNode?.next as AbstractNode;
                }
                return currentNode as AbstractNode; // Due to edge case handling subroutine above,
                // the <currentNode> should never be <null>, so "Type coersion" can be used here.
            }

            const searchSecondHalf = (list: LinkedList = this): AbstractNode => { // Explicitly using the current
                // instance of LinkedList as a default parameter, so that <this> keyword will refer to the current LL.
                // I know this is inconsistent with the function above, I just want to demonstrate on my Github that I know
                // multiple ways of achieving this.
                let currentNode = this.getTail();
                for(let i = this.length - 1; i > index; i--){
                    currentNode = currentNode?.last as AbstractNode;
                }
                return currentNode as AbstractNode; // Due to edge case handling subroutine above,
                // the <currentNode> should never be <null>, so "Type coersion" can be used here.
            }

            let targetNode = (index < this.length / 2) ? searchFirstHalf() : searchSecondHalf();
            // Potentially helpful console and process outputs below. 
            // If this program ever gets used in a web application or Node.js environment, 
            // the following two lines can be "un-commented" so they can take effect:
            
            // console.log(`Retrieved node {${targetNode?.getValue()}} at index ${index}.`);
            // process.stdout.write(`Retrieved node {${targetNode?.getValue()}} at index ${index}.`);
            return targetNode;
        }

        this.absorb = function(splice_LL: LinkedList, insertPos: number): LinkedList{
            /**
             * Method for splicing in a new LinkedList into the current one.
             * @param spliceLL: LinkedList ==> The new Linked List to be absorbed into the current instance of Linked List.
             * @param insertPos: number ==> The Posision at which to splice in the new Linked List.
             * @returns this: LinkedList ==> The updated instance of the Linked List.
             */
            
            // JUST SET THE .NEXT AND .LAST OF THE APPROPRIATE NODES
            // THEN REDEFINE WHICH NODES ARE THE HEAD AND TAIL (IF NECESSARY)
            // SET THE HEAD.LAST TO NULL AND TAIL.NEXT TO NULL
            // UPDATE THIS.LENGTH

            return this;
        }

        if (data){
            // populate the linkedList, setting each node's <next> and <last> while cycling thru the data.
        }
        
    }
}