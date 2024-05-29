import { hashSet } from "./hash.js";
import { merge_s } from "./merge_sort.js";

//create node factory that has a value left and right property
function node(value) {
  return {
    data: value,
    left: null,
    right: null,
  };
}

//create factory Tree
function Tree(arrayInitial) {
  //create buildTree which takes unsorted array with duplicate elements and forms a balanced bst and returns node

  function buildTree(arr) {
    //remove duplicates
    function removeDuplicate(arr) {
      let hashet = hashSet();
      for (let ele of arr) {
        let eletext = ele.toString();
        hashet.set(eletext);
      }
      return hashet.keys();
    }
    let arrayWithoutDuplicates = removeDuplicate(arrayInitial);
    //sort array
    let sortedArray = merge_s(arrayWithoutDuplicates);
    console.log(sortedArray);
    /* A function that constructs Balanced Binary Search Tree  
 from a sorted array */
    function sortedArrayToBST(arr, start, end) {
      /* Base Case */
      if (start > end) {
        return null;
      }
      /* Get the middle element and make it root */
      var mid = parseInt((start + end) / 2);
      var nod = node(arr[mid]);
      /* Recursively construct the left subtree and make it 
     left child of root */
      nod.left = sortedArrayToBST(arr, start, mid - 1);
      /* Recursively construct the right subtree and make it 
     right child of root */
      nod.right = sortedArrayToBST(arr, mid + 1, end);
      return nod;
    }
    var root = sortedArrayToBST(sortedArray, 0, sortedArray.length - 1);
    return root;
  }
  var root = buildTree(arrayInitial);
  //insert(value)
  function insert(value) {
    let newNode = node(value);
    let temp = root;

    while (temp.left || temp.right) {
      if (value < temp.data) {
        if (temp.left) {
          temp = temp.left;
        } else if (!temp.left) {
          temp.left = newNode;
          console.log(root);
          return root;
        }
      } else if (value > temp.data) {
        if (temp.right) {
          temp = temp.right;
        } else if (!temp.right) {
          temp.right = newNode;
          console.log(root);
          return root;
        }
      }
    }
    if (!temp.left && !temp.right) {
      if (value < temp.data) {
        temp.left = newNode;
      } else if (value > temp.data) {
        temp.right = newNode;
      }
    }
    return root;
  }
  // delete(value)
  function deleteValue(value) {
    let temp = root;
    let parent = temp;
    console.log(temp);
    while (temp.data != value) {
      if (value < temp.data) {
        if (temp.left) {
          parent = temp;
          temp = temp.left;
        } else if (!temp.left) {
          return "No such Value!";
        }
      } else if (value > temp.data) {
        if (temp.right) {
          parent = temp;
          temp = temp.right;
        } else if (!temp.right) {
          return "No such Value!";
        }
      }
    }
    if (temp.data == value) {
      //case1:delete a leaf node in bst
      if (!temp.left && !temp.right) {
        if (parent.data > value) {
          parent.left = null;
        } else if (value > parent.data) {
          parent.right = null;
        }
      }
      //case2:delete a node with single child
    }
  }
  // find(value)
  function find(value) {
    let temp = root;

    console.log(temp);
    while (temp.data != value) {
      if (value < temp.data) {
        if (temp.left) {
          temp = temp.left;
        } else if (!temp.left) {
          return "No such Value!";
        }
      } else if (value > temp.data) {
        if (temp.right) {
          temp = temp.right;
        } else if (!temp.right) {
          return "No such Value!";
        }
      }
    }
    if (temp.data == value) {
      return temp;
    }
  }
  //levelOrder Traversal using loop
  function levelOrder(func) {
    function queue(root) {
      let array = [];
      let data = [];
      array.push(root);
      let i = 0;
      while (array[0]) {
        if (array[0].left || array[0].right) {
          if (array[0].left) {
            array.push(array[0].left);
          }
          if (array[0].right) {
            array.push(array[0].right);
          }
        }
        node = array.shift();
        data.push(node.data);
      }
      return data;
    }
    let data = queue(root);
    for (let ele of data) {
      func(ele);
    }
  }
  //preorder(callback)
  function preOrder(func) {
    let arr = [];
    function preorder(root) {
      arr.push(root.data);
      if (root.left) {
        preorder(root.left);
      }
      if (root.right) {
        preorder(root.right);
      }
      return arr;
    }
    let data = preorder(root);
    for (let ele of data) {
      func(ele);
    }
  }
  //inorder(callback)
  function inOrder(func) {
    let arr = [];
    function inorder(root) {
      if (root.left) {
        inorder(root.left);
      }
      arr.push(root.data);
      if (root.right) {
        inorder(root.right);
      }
      return arr;
    }
    let data = inorder(root);
    for (let ele of data) {
      func(ele);
    }
  }
  //postorder(callback)
  function postOrder(func) {
    let arr = [];
    function postorder(root) {
      if (root.left) {
        postorder(root.left);
      }
      if (root.right) {
        postorder(root.right);
      }
      arr.push(root.data);
      return arr;
    }
    let data = postorder(root);
    for (let ele of data) {
      func(ele);
    }
  }
  //height(node)
  function height(node) {
    let value = node.data;
    let nodeup = find(value);
    function heightUtility(node) {
      if (!node) {
        return -1;
      } else {
        var heightLeft = heightUtility(node.left);
        var heightRight = heightUtility(node.right);
        var ans = Math.max(heightLeft, heightRight) + 1;
      }
      return ans;
    }
    var height = heightUtility(nodeup);
    console.log(height);
    return height;
  }
  return {
    height,
    postOrder,
    inOrder,
    preOrder,
    levelOrder,
    find,
    deleteValue,
    root,
    buildTree,
    insert,
  };
}
let array = [1, 3, 2, 2, 7, 7, 6, 5, 4, 2, 2];
let rootNode = Tree(array);
rootNode.preOrder(console.log);
rootNode.inOrder(console.log);
rootNode.postOrder(console.log);
rootNode.height(node(6));

const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};
prettyPrint(rootNode.root);
