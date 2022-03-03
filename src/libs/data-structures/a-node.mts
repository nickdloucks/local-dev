
/**
 * Defines a data node with optional <next> and <last> properties 
 * for LinkedList support.
 */

export default class AbstractNode {

    private value; // value of the node

    // public access methods:
    public readonly getValue;
    public setValue;

    // Properties for use in a LinkedList data structure:
    next?: AbstractNode | null | Array<unknown>; // Array<unknown> type useful if the node is part of a Graph.
    last?: AbstractNode | null | Array<unknown>;
    
    // Properties for use in a Graph data structure:
    edges?: AbstractNode | null | Array<unknown> // Specifically for use in a Graph.
    
    // Properties for use in a Tree data structure:
    parent?: AbstractNode | null;
    children?: Array<AbstractNode> | null = [];
    addChild;
    removeChild;

    constructor (val : unknown, next?: AbstractNode ){

        this.value = val;

        this.getValue = function(): unknown{
            return this.value;
        }
        this.setValue  = function(newVal: unknown): void {
            this.value = newVal;
        }

        this.addChild = function(childNode: AbstractNode): void{
            this.children?.push(childNode);
            childNode.parent = this;
        }

        this.removeChild = function(target: AbstractNode): AbstractNode {
            let position = this.children?.indexOf(target);
            return this.children?.splice(position as number, 1)[0] as AbstractNode;
        }

    }
}