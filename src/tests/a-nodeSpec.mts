import {default as AbstractNode} from '../libs/data-structures/a-node.mjs';
import LinkedList from '../libs/data-structures/linked-list.mjs';

describe("Abstract Node Class", ()=>{
    let newNode = new AbstractNode('pizza');

    it("initializes and returns value properly.", ()=>{
        expect(newNode.getValue()).toEqual('pizza');
    });

    it("leaves <next> and <last> undefined at init.", ()=>{
        expect(newNode.next).toEqual(undefined);
        expect(newNode.last).toEqual(undefined);
    });

    it("sets <next> and <last> correctly in a Linked List.", ()=>{
        let numbers = [1, 2, 3, 4];
        let numNodes = numbers.map((val) => new AbstractNode(val));
        let numList = new LinkedList(numNodes);

        expect(numList.getHead()?.next?.getValue()).toEqual(2);
        //expect(numList.getTail()?.last?.getValue()).toEqual(3);
    });
});