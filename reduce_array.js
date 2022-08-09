//array reduce method==  array reduce method executes a callback function on every element on an array and it will return one single output value
//getting an array of an items and then adding all of the items  inside one resulting values  . it takes a extra accumulator variable which shoould be first initialized.
const numbers=[1,2,34,645,34,33,4,5,6,7]
const sum=numbers.reduce((acc,value)=>{
    return acc+value
},0,)
console.log(sum)
console.log(numbers)
const max=numbers.reduce((acc,val)=>{
    if(acc>val){
        return acc
    }else{
        return val
    }
},-Infinity,)
console.log(max)




//use reduce method to sum all the store values
const store=[
    {
        name:"laptop",
        price:1000,
        count:20,

    },
    {
        name:"desktop",
        price:1200,
        count:4,
    },
    {
        name:'phone',
        price:23000,
        count:2,
    }
]
const totalPrice=store.reduce((acc,value)=>{
    return acc+(value.price*value.count)

},0,)
console.log(`Total price of the given store is ${totalPrice}`)
