export default class AbstractNode {
    private alias: string; // name of the node
    private value: unknown; // value of the node

    // public access methods:
    public readonly getValue: unknown;
    public setValue;
    public readonly getAlias: unknown;
    public setAlias;

    constructor (alias: string, val : any ){
        this.alias = alias;
        this.value = val;

        this.getValue = function(): unknown{
            return this.value;
        }
        this.setValue  = function(newVal: unknown): void {
            this.value = newVal;
        }
        this.getAlias = function(): unknown{
            return this.alias;
        }
        this.setAlias = function(newAlias: unknown):void {
            this.alias = newAlias as string;
        }
    }
}