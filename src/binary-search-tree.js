const {
  NotImplementedError
} = require('../extensions/index.js');

const {
  Node
} = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */

class BinarySearchTree {

  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    this.rootNode = addTo(this.root(), data);

    function addTo(subTree, value) {
      if (!subTree) return new Node(value);
      if (subTree.data === value) return subTree;

      if (subTree.data > value) {
        subTree.left = addTo(subTree.left, value);
      } else {
        subTree.right = addTo(subTree.right, value);
      }

      return subTree;
    }
  }

  has(data) {
    return hasData(this.root(), data);

    function hasData(subTree, value) {
      if (!subTree) return false;
      console.log(subTree.data);
      if (subTree.data === value) return true;

      if (subTree.data > value) {
        return hasData(subTree.left, value);
      } else {
        return hasData(subTree.right, value);
      }
    }
  }

  find(data) {
    return searchIn(this.root(), data);

    function searchIn(subTree, value) {
      if (!subTree) return null;

      if (subTree.data === value) return subTree;

      if (subTree.data > value) {
        return searchIn(subTree.left, value);
      } else {
        return searchIn(subTree.right, value);
      }
    }
  }

  remove(data) {
    this.rootNode = removeNode(this.root(), data);

    function removeNode(subtree, value) {
      if (!subtree) return null;

      if (subtree.data > value) {
        subtree.left = removeNode(subtree.left, value);
        return subtree;
      } else if (subtree.data < value) {
        subtree.right = removeNode(subtree.right, value);
        return subtree;
      } else {
        if (!subtree.left && !subtree.right) return null;
        if (!subtree.left) return subtree.right;
        if (!subtree.right) return subtree.left;

        let minFromRight = subtree.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        subtree.data = minFromRight.data;
        subtree.right = removeNode(subtree.right, minFromRight.data);

        return subtree;
      }
    }
  }

  min() {
    let min = this.root();
    while(min.left) {
      min = min.left;
    }

    return min.data;
  }

  max() {
    let max = this.root();
    while(max.right) {
      max = max.right;
    }
    
    return max.data;
  }
}

module.exports = {
  BinarySearchTree
};