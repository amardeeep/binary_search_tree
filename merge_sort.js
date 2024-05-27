//function for merge sort
function compare(arr1, arr2) {
  let arr_f = [];
  let arr_c = [];
  while (arr1.length !== 0 && arr2.length !== 0) {
    if (arr1[0] < arr2[0]) {
      arr_c.push(arr1.shift());
    } else if (arr1[0] > arr2[0]) {
      arr_c.push(arr2.shift());
    }
  }
  if (arr1.length == 0) {
    arr_f = arr_c.concat(arr2);
  } else if (arr2.length == 0) {
    arr_f = arr_c.concat(arr1);
  }
  return arr_f;
}
function merge_s(arr) {
  if (arr.length > 1) {
    let index = 0;
    if (arr.length % 2 == 0) {
      index = arr.length / 2;
    } else {
      index = (arr.length - 1) / 2;
    }

    let arr_l = merge_s(arr.slice(0, index));
    let arr_r = merge_s(arr.slice(index, arr.length));
    let arr_c = compare(arr_l, arr_r);
    return arr_c;
  } else if (arr.length == 1) {
    return arr;
  }
}
export { merge_s };
