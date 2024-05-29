function queue(root) {
  let array = [];
  let data = [];
  array.push(root);
  let i = 0;
  while (array[i]) {
    i++;
    if (array[i].left || array[i].right) {
      if (array[i].left) {
        array.push(array[i].left);
      } else if (array[i].right) {
        array.push(array[i].right);
      }
    }
    node = array.shift();
    data.push(node.data);
  }
  return data;
}
export { queue };
