//The concat() method concatenates (joins) two or more arrays.

//The concat() method returns a new array, containing the joined arrays.

//The concat() method does not change the existing arrays.

const x=[1,2,3];
const y=[4,5,6];
const z=[7,8,9];
const xy=x.concat(y)
console.log(xy)
const xyz=x.concat(y,z)
console.log(xyz)

//the concat method is also worked similar with the push method as 
const x5=x.concat(5)
console.log(x5)