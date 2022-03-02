
/**
 * Defines a data node with optional <next> and <last> properties 
 * for LinkedList support.
 */

export default class AbstractNode {

    private value; // value of the node

    // public access methods:
    public readonly getValue;
    public setValue;

    next?: AbstractNode | null | Array<unknown>; // Array<unknown> type useful if the node is part of a Graph.
    last?: AbstractNode | null | Array<unknown>;
    edges?: AbstractNode | null | Array<unknown> // Specifically for use in a Graph.

    constructor (val : unknown, next?: AbstractNode ){

        this.value = val;

        this.getValue = function(): unknown{
            return this.value;
        }
        this.setValue  = function(newVal: unknown): void {
            this.value = newVal;
        }

    }
}