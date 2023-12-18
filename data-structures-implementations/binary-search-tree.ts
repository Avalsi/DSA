class BinaryTreeNode {
    val: number | null;
    left: BinaryTreeNode | null;
    right: BinaryTreeNode | null;
    constructor(val: number) {
      this.val = val;
    }
  }
  
  class BinaryTree {
    root?: BinaryTreeNode;
    constructor(val: number | null) {
      this.root = new BinaryTreeNode(val);
    }
  
    insert(val: number) {
      if (!this.root) {
        this.root = new BinaryTreeNode(val);
      }
      let current = this.root;
  
      //if the value we are inserting is more than current value, we go right
      while (true) {
        if (this.compare(val, current.val) === 1) {
          if (current.right) {
            current = current.right;
          } else {
            current.right = new BinaryTreeNode(val);
            return current.right;
          }
          //if the value we are inserting is less than current value, we go left
        } else if (this.compare(val, current.val) === -1) {
          if (current.left) {
            current = current.left;
          } else {
            current.left = new BinaryTreeNode(val);
            return current.left;
          }
        } else {
          return current;
        }
      }
    }
  
    search(val: number) {
      let current = this.root;
      while (this.compare(val, current.val) !== 0) {
        //if searched value is less than current value
        if (this.compare(val, current.val) === -1) {
          if (!current.left) return;
          current = current.left;
        } else {
          if (!current.right) return;
          current = current.right;
        }
      }
      return current;
    }
  
    remove(val: number) {
      this.root = this.removeNode(this.root, val);
    }
    
    removeNode(root: BinaryTreeNode | null, val: number): BinaryTreeNode | null {
      if (root === null) {
        return null;
      }
    
      if (val < root.val) {
        root.left = this.removeNode(root.left, val);
      } else if (val > root.val) {
        root.right = this.removeNode(root.right, val);
      } else {
        if (!root.left && !root.right) {
          return null;
        } else if (!root.left) {
          return root.right;
        } else if (!root.right) {
          return root.left;
        } else {
          // Find the replacement node
          let replacement = this.findMinimum(root.right);
          root.val = replacement.val;
          root.right = this.removeNode(root.right, replacement.val);
        }
      }
    
      return root;
    }
  
    findMinimum(node: BinaryTreeNode | null): BinaryTreeNode | null {
      if (node === null || node === undefined) {
        return null;
      }
    
      while (node.left !== null && node.left !== undefined) {
        node = node.left;
      }
      
      return node;
    }
  
    compare(a: number, b: number) {
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    }
  }