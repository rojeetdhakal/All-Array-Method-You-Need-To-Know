//array filter method = Array filter method create a new array by removing all the  element for which the call back function returns a fase value
//keep it if callback returns true and removes if it returns false
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
//return all the even number from the array
const evenNumbers = numbers.filter((number) => {
  return number % 2 == 0;
}); 
//returns all the odd number from the array
const oddNumber = numbers.filter((number) => {
 return number % 2 == 1;
});
console.log(evenNumbers);
console.log(oddNumber);

//selecting the person whose are is greater or equal to 18
const people=[
    {
        name:'Aakash',
        age:22,
    },
    {
        name:"sudip",
        age:17,
    },
    {
        name:"prem",
        age:18,
    },
    {
        name:"sandip",
        age:19,
    }
]
const adults=people.filter((person)=>{
    return  person.age>=18;
})
console.log(adults)

//filtering the duplicates number  and sorting it in accending order
const datas=[1,2,4,2,4,5,6,7,5,3]
const data=datas.filter((value,index,array)=>{
    return array.indexOf(value)==index
})
console.log(data.sort())