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
// using map with array object
const people = [
    {id: 1,
    name : 'david' 
},{
    id: 2,
    name:'outro'
}
];
// test map for me understand better
console.log('test map',people.map(i => i.name));
const testMap2 = people.map(i => {
    if(i.name === "david")
        return true;
});
console.log(testMap2);
// SUMMARY OF THE MAP IS THAT IT WILL GO THROUGH THE WHOLE ARRAY AND INSERT FUNCTION IN EACH INDEX.
// EACH INDEX WILL HAVE A RETURN.



// ------ EXAMPLE FILTER -------

console.log(people.filter(i =>{ i.name === "david"}));

//SUMMARY OF THE FILTER, IT WILL RETURN ONLY WHAT TO PASS IN THE FUNCTION VALIDATION 
//USING FOR FILTER ARRAY AND FORMAT TO A NEW ARRAY

// ----- EXAMPLE USING FILTER AND MAP ------

const arrayMapFilter = people.filter(i => i.name === "david").map(i => i.name + ' Retzlaff');
console.log("arrayMapFilter", arrayMapFilter);

// USING FILTER FOR FIND PEOPLE WITH NAME DAVID AND APPLY LAST NAME WITH MAP
