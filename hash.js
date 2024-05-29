function hashSet() {
  function hash(key) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
      hashCode = hashCode % 200;
    }
    return hashCode;
  }
  let capacity = 200;
  let arr = Array(capacity);
  function set(key) {
    let index = hash(key);
    if (!arr[index]) {
      arr[index] = key;
    } else if (arr[index]) {
      if (arr[index] == key) {
        arr[index] = key;
      } else {
        return "collision occcured";
      }
    }
    return arr;
  }
  function keys() {
    let keysArr = [];
    for (let ele of arr) {
      if (ele) {
        keysArr.push(ele);
      }
    }
    return keysArr;
  }
  return {
    keys,
    arr,
    hash,
    set,
  };
}
export { hashSet };
