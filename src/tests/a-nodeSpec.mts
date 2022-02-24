import {default as AbstractNode} from '../libs/data-structures/a-node.mjs';

describe("Abstract Node Class", ()=>{
    it("initializes name and value properly.", ()=>{
        let name = new AbstractNode('Nick', 'programmer');
        expect(name.getAlias() as string).toEqual('Nick');
        expect(name).not.toBeNull();
        expect(name.next).not.toBeDefined();
        expect(name.last).not.toBeDefined();

        let arrayVal = new AbstractNode(0, 'A');
        
    });
    it("gets values properly.", ()=>{

    })
});