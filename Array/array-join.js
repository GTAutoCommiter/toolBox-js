const elements = ['Fire', 'Air', , undefined, 'Water'];
console.log('-------Array.join--------')
console.log(elements.join());
console.log(elements.join(''));
console.log(elements.join('-'));


class myArray {
  constructor(array) {
    this.array = array;
  }
  join(string = ',') {
    let res = '';
    const array = this.array;
    if (array.length == 0) {
      return res;
    }
    res = array[0];
    for (let i = 1; i < array.length; i++) {
      if (!array[i]) {
        res += string + '';
      } else {
        res += string + array[i];
      }
    }
    return res;
  };
}

console.log('-------myJoin--------')
const myArr = new myArray(elements);
console.log(myArr.join());
console.log(myArr.join(''));
console.log(myArr.join('-'));

