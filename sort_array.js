//The sort() method sorts an array alphabetically:

const names=['anuradha',"nepal","aakash","rojit","roshan","hello","Hello","Aakash"]
names.sort()
console.log(names)
 

const numbers=[3,4,54,223,56,343,467]
numbers.sort((a,b)=> a-b)
console.log(numbers)


//sorting the price of the object of an array
const products=[
    {
        name:'laptop',
        price:200000,
    }
    ,{
        name:"desktop",
        price:50000,
    },
    {
        name:'mobile',
        price:20000,
    }
]
 console.log(products.sort((a,b)=>{ return a.price-b.price }))
 
