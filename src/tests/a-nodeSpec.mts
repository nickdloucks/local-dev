import {default as AbstractNode} from '../libs/data-structures/a-node.mjs';

describe("Abstract Node Class", ()=>{
    let newNode = new AbstractNode('pizza');
    let arrayVal = new AbstractNode('A');

    it("initializes and returns value properly.", ()=>{
        expect(newNode.getValue()).toEqual('pizza');
    });

    it("leaves <next> and <last> undefined at init.", ()=>{
        expect(newNode.next).toEqual(undefined);
        expect(newNode.last).toEqual(undefined);
    });
});