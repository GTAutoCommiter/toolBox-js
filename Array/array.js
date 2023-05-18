import {myJoin} from "./array-join.js";


class myArray{
  constructor(array){
    this.array=array;
  }
  join(string=','){()=>{
    myJoin(this.array,string);
  }}
}

const elements = ['Fire', 'Air', , undefined, 'Water'];
console.log('-------Array.join--------')
console.log(elements.join());
console.log(elements.join(''));
console.log(elements.join('-'));
console.log('-------myJoin--------')
const myArr = new myArray(elements);
console.log(myArr.join());
console.log(myArr.join(''));
console.log(myArr.join('-'));