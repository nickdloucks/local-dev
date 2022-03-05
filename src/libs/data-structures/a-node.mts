
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
    next?: AbstractNode | null
    last?: AbstractNode | null
    
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

        this.removeChild = function(target: AbstractNode): AbstractNode | undefined {
            let position = this.children?.indexOf(target); // Find target node in list of children, remove first occurrence if present.
            // Otherwise return <undefined>.
            return (position != -1) ? this.children?.splice(position as number, 1)[0] as AbstractNode: undefined;
        }

    }
}