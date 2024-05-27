import { hashSet } from "./hash.js";
import { merge_s } from "./merge_sort.js";
//create node factory that has a value left and right property
function node(value) {
  return {
    value,
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
  }
  buildTree(arr);
  return {
    buildTree,
  };
}
let array1 = [1, 2, 2, 3, 3, 6, 6, 4, 4, 7, 8, 9, 9, 2, 2];
Tree(array1);
