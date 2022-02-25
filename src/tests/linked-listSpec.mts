import { link } from 'fs/promises';
import AbstractNode from '../libs/data-structures/a-node.mjs';
import {default as LinkedList} from '../libs/data-structures/linked-list.mjs';

describe("LinkedList suite.",()=>{
    // TESTING SAMPLE DATA. CONTEXT:
    let data = ['a', 'b', 'c', 'd', 'e'];
    let nodeList: Array<AbstractNode> = data.map((val: string, index: number)=>{
        return new AbstractNode(index, val);
    });
    let linked = new LinkedList(nodeList);
    
    it("sets <head> & <tail> nodes to <null> when there is no input value given to constructor.", ()=>{
        let list = new LinkedList();
        expect(list.getHead()).toEqual(null);
        expect(list.getTail()).toEqual(null);
    });

    it("returns correct value using 'getter' methods.", ()=>{
        expect(linked.getHead()?.getValue()).toEqual('a');
        expect(linked.getHead()?.next?.getValue()).toEqual('b');
        expect(linked.getHead()?.next?.next?.getValue()).toEqual('c');
    })

    it("changes values with 'setter' methods.", ()=>{
        // insert a new node at the head of the linked list,
        // then use the 'getter' to check that the 'setter' worked properly
        let oldHead = linked.getHead()?.next;
        let nHead = new AbstractNode('new head', '$');
        linked.setHead(nHead);

        expect(linked.getHead()).toEqual(nHead);
        expect(linked.getHead()?.next).toEqual(oldHead);
    });
})