// simple forEach method
const students = ["ram", "shyam", "hari", "sita"];
students.forEach((student, index) => {
  console.log(`a[${index}]=${student}`);
});
//forEach  method for summing all the values of the array
const datas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
datas.forEach((data) => {
  sum = sum + data;
});
console.log(sum);

//forEach for counting how many times the letter appears in an array with the help of an object
const letters = ['q','w','e','r','t','y','u','e','e','w'];
let count = {}; //count object keep track of count of every letter
letters.forEach((letter) => {
  if (count[letter]) {
    count[letter]++;
  } else {
    count[letter] = 1;
  }
});
console.log(count);

