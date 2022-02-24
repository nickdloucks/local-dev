import AbstractNode from '../../src/libs/data-structures/a-node';

describe("Abstract Node Class", ()=>{
    it("initializes name and value properly.", ()=>{
        let name = new AbstractNode('Nick', 'programmer');
        expect(name.alias).toEqual('Nick');
        expect(name).not.toBeNull();
        expect(name.next).not.toBeDefined();
        expect(name.last).not.toBeDefined();
    });
    it("gets values properly.", ()=>{
        
    })
});