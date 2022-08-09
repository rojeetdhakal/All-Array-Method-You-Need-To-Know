//changes an array element by changing or replacing every single element from it.
//The splice() method overwrites the original array.
//array.splice(index, howmany, item1, ....., itemX)
const numbers=[1,2,3,4,5,6,78,6,4564]
const changedNumbers=numbers.splice(6,3,7,8,9)
console.log(numbers)
console.log(changedNumbers)


const datas=[0,1,2,3,4,5,6,7,8,9]
datas.splice(2,0,23443,4354,54656,45)
console.log(datas)