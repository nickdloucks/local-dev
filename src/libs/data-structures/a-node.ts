export default class AbstractNode {
    _alias: string;
    _value : any;

    constructor (alias: string, val : any ){
        this._alias = alias;
        this._value = val;
    }
}