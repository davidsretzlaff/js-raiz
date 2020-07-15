// EXAMPLE MAP
//exemple map multiplyng value array
const numbers = [2,3,6,5,10];

const newArrayMap = numbers.map(function (number)
{
 return number * 2 ;
});
console.log("NewArrayMap", newArrayMap);

//using map with and arrow 
const newArrayMapandArrow = numbers.map(number => number * 2);
console.log("newArrayMapandArrow", newArrayMapandArrow);

//exemple map returning all values ​​with lowercase characters
const names = ['Ayrton','Teshima','Teste','Fulano'];
const namesLowercase = names.map(function(name){
    return name.toLowerCase();
});
//using arrow
const namesLowercaseAndArrow = names.map(name =>  name.toLowerCase());
console.log("namesLowercaseAndArrow",namesLowercaseAndArrow);

// EXAMPLE FILTER
let mult2 = [];

