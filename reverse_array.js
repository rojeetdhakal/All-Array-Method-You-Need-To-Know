// The reverse() method reverses the order of the elements in an array.

// The reverse() method overwrites the original array.

const numbers=[1,2,3,4,5]
numbers.reverse()
console.log(numbers)

//if you want it doesnot effect the original array first concat it and reverse as
const datas=[3,4,5,6,7,8,9]
const data= datas.concat().reverse()
console.log(data)

//also we can use the spread operator as
const products=[1,23,4,5,65,35,42]
const product=[...products].reverse()
console.log(product)


//to reverse the string   first split, reverse and join
const fact='Coding is Fun!'
const reverseString=fact.split('').reverse().join('')
console.log(reverseString)
