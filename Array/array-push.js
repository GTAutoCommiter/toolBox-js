const animals = ['pigs', 'goats', 'sheep'];
const count = animals.push('cows');
console.log(count);
console.log(animals);
animals.push('chickens', 'cats', 'dogs');
console.log(animals);

class myArray{
  constructor(array){
    this.array=array;
  }
}