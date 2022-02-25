import AbstractNode from '../libs/data-structures/a-node.mjs';
import {default as LinkedList} from '../libs/data-structures/linked-list.mjs';

describe("LinkedList suite.",()=>{
    
    it("sets <head> & <tail> nodes to <null> when there is no input value given to constructor.", ()=>{
        let list = new LinkedList();
        expect(list.getHead).toEqual(null);
        expect(list.getTail).toEqual(null);
    });

    it("returns correct value using 'getter' methods.", ()=>{
        let data = ['a', 'b', 'c', 'd', 'e'];
        let nodeList: Array<AbstractNode> = data.map((val: string, index: number)=>{
            return new AbstractNode(val, index);
        });
        let linked = new LinkedList(nodeList);

        expect(linked.getHead()?.getAlias()).toEqual('a');
        
    })

})