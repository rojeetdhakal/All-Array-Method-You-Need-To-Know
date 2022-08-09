// The every() method executes a function for each array element.

// The every() method returns true if the function returns true for all elements.

// The every() method returns false if the function returns false for one element.

// The every() method does not execute the function for empty elements.

// The every() method does not change the original array

//syntax == array.every(function(currentValue, index, arr), thisValue)
const numbers=[-1,1,2,3,4,5]
const res=numbers.every(isPositive)
function isPositive(item){
    return item>0;
}
console.log(res)



const persons=[
    {
        name:'aakash'
    },
    {
        name:'sandip'

    },
    {
        name:"pradip"
    },
    {
        surname:"dhakal"
    }
]
const result=persons.every(person=>person.name!==undefined)
console.log(result)