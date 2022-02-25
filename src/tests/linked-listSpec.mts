import AbstractNode from '../libs/data-structures/a-node.mjs';
import {default as LinkedList} from '../libs/data-structures/linked-list.mjs';

describe("LinkedList suite.",()=>{
    // TESTING SAMPLE DATA. CONTEXT:
    let data = ['a', 'b', 'c', 'd', 'e'];
    let nodeList: Array<AbstractNode> = data.map((val: string, index: number)=>{
        return new AbstractNode(index, val);
    });
    let linked = new LinkedList(nodeList);
    let listHead = linked.getHead();
    
    it("sets <head> & <tail> nodes to <null> when there is no input value given to constructor.", ()=>{
        let emptyList = new LinkedList();
        expect(emptyList.getHead()).toEqual(null);
        expect(emptyList.getTail()).toEqual(null);
    });

    it("returns correct value using 'getter' methods.", ()=>{
        expect(listHead?.getValue()).toEqual('a');
        expect(listHead?.next?.getValue()).toEqual('b');
        expect(listHead?.next?.next?.getValue()).toEqual('c');
    })

    it("changes values with 'setter' methods.", ()=>{
        // insert a new node at the head of the linked list,
        // then use the 'getter' to check that the 'setter' worked properly
        let oldHead = listHead?.next;
        let nHead = new AbstractNode('new head', '$');
        linked.setHead(nHead);

        expect(listHead).toEqual(nHead);
        expect(listHead?.next).toEqual(oldHead);
    });
})