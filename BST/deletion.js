class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        const newNode = new TreeNode(val);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.val < node.val) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    search(val) {
        return this.searchNode(this.root, val);
    }

    searchNode(node, val) {
        if (node === null) {
            return false;
        }
        if (val < node.val) {
            return this.searchNode(node.left, val);
        } else if (val > node.val) {
            return this.searchNode(node.right, val);
        } else {
            return true;
        }
    }

    delete(val) {
        this.root = this.deleteNode(this.root, val);
    }

    deleteNode(node, key) {
        if (node === null) {
            return null;
        }
        if (key < node.val) {
            node.left = this.deleteNode(node.left, key);
        } else if (key > node.val) {
            node.right = this.deleteNode(node.right, key);
        } else {
            if (node.left === null) {
                return node.right;
            } else if (node.right === null) {
                return node.left;
            }
            node.val = this.minValue(node.right);
            node.right = this.deleteNode(node.right, node.val);
        }
        return node;
    }

    minValue(node) {
        let current = node;
        while (current.left !== null) {
            current = current.left;
        }
        return current.val;
    }

    preorder(node) {
        if (node !== null) {
            console.log(node.val);
            this.preorder(node.left);
            this.preorder(node.right);
        }
    }

    inorder(node) {
        if (node !== null) {
            this.inorder(node.left);
            console.log(node.val);
            this.inorder(node.right);
        }
    }

    postorder(node) {
        if (node !== null) {
            this.postorder(node.left);
            this.postorder(node.right);
            console.log(node.val);
        }
    }
}



const bst = new BinarySearchTree();
bst.insert(78);
bst.insert(88);
bst.insert(98);
bst.insert(108);

console.log("Preorder traversal:");
bst.preorder(bst.root);

console.log("Inorder traversal:");
bst.inorder(bst.root);

console.log("Postorder traversal:");
bst.postorder(bst.root);

console.log("Searching for 88:", bst.search(88)); 
console.log("Searching for 100:", bst.search(100)); 

console.log("Deleting node with value 88:");
bst.delete(88);

console.log("Inorder traversal after deletion:");
bst.inorder(bst.root);
