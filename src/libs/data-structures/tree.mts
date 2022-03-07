import AbstractNode from "./a-node.mjs";

export default class Tree {
    private root: AbstractNode | null;
    readonly levels: number;
    dfs;
    bfs;
    // Make and array for each level that contains all the nodes in the level. 
    // All should already have parents and children defined.

    constructor (root? : AbstractNode){
        this.root = (root) ? root : null;
        this.levels = (root) ? 1 : 0;

        this.dfs = function(targetNode: AbstractNode): AbstractNode | undefined{
            let currentNode = this.root;

            // return (currentNode = targetNode) ? currentNode : recursiveFunction(currentNode.children[0]);
            // SEARCH DOWN TO LEAF NODE FIRST, THEN NEXT BRANCH OVER

            return undefined;
        }

        this.bfs = function(): AbstractNode | undefined{
            let currentNode = this.root;

            // let next level down = currentNode.children.forEach(child_children => childres.includes(targetNode))
            // if next level down array contains true, get that node; if not, search level below that
            // return(thisLevel) ? currentNode : undefined;
            // SEARCH WHOLE LEVEL OF NODES, THEN SEARCH THE NEXT LEVEL DOWN

            return undefined;
        }
    }
}