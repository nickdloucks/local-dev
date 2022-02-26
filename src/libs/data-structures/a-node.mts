export default class AbstractNode {

    private value; // value of the node

    // public access methods:
    public readonly getValue;
    public setValue;

    next?: AbstractNode;
    last?: AbstractNode;

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