//The fill() method fills specified elements in an array with a value.

//The fill() method overwrites the original array.

//Start and end position can be specified. If not, all elements will be filled.
//syntax   array.fill(value, start, end)
const numbers=[1,2,4,5,6]
const N=numbers.fill(0,1,4)
console.log(numbers)
console.log(N)



function fillInNumbers(n){
    return Array(n).fill(0).map((_,index)=>{
        return index+1
    })
}
console.log(fillInNumbers(10))

