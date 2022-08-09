//Array slice method returns a shallow copy of a portion of an array
//it wont modify the original array on which is called upon you can provide the beginnig index and the end index.
const numbers=[1,2,3,4,5,6]
const number=numbers.slice(-3)  //last 3 items of an array
console.log(number)   //4,5,6
const number1=numbers.slice(2,4)
console.log(number1)//2,3


//
const students=['Ram',"Shyam","Hari","Gita","Sita","Nita","Pyakuli","Syakuli","Hyakuli"]
const firstThree=students.slice(0,3)
console.log(firstThree)