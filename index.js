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
function Tree(arr) {
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
    let arrayWithoutDuplicates = removeDuplicate(arr);
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
    console.log(root);
  }

  buildTree(arr);

  return {
    buildTree,
  };
}
let array = [1, 3, 2, 2, 7, 7, 6, 5, 4, 2, 2];
Tree(array);
