//array map methods doesnot change the original array,the change is seen in the new array that is made after
const datas=[2,3,5,6,7,9];
const doubleDatas=datas.map((data)=>{
  return   data*2
})
console.log(datas)  //the same data returned 
console.log(doubleDatas) // the double of  the given data is returned here

//Some real life examples
let products=[
    {
        name:'laptop',
        price:1000,
        count:10
    },
    {
        name:"desktop",
        price:1500,
        count:5
    },
    {
        name:"phone",
        price:400,
        count:60
    }
]
const totalValues=products.map(product=>({
    name:product.name,
    totalvalues:product.price*product.count
}))
console.log(totalValues)


const totalvalues1=products.map((product)=>({
    name:product.name,
    totalvalues:product.price*product.count

}))
console.log(totalvalues1)


const totalValues3=products.map((product)=>{
    return({
    name:product.name,
    totalvalues:product.price*product.count

    })
})
console.log(totalValues3)

//map method for converting array of string number to array of numbers
const strings=['1','2','3','4','5'];
const number=strings.map((string)=>{ return Number(string)})
const number1=strings.map(string=>Number(string))
const number2=strings.map((string)=>(Number(string)))
const number3=strings.map(Number)
console.log(number)
console.log(number1)
console.log(number2)
console.log(number3)