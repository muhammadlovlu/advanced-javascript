const numbers = [2,4,6,9,2,4];
const partOne = numbers.slice(2,5);
// console.log(numbers);
// console.log(partOne);
// console.log(numbers);


//////////////////
const twoNumbers = [2,4,6,8,10,12];
// console.log(twoNumbers);
const removeElement = twoNumbers.splice(2,3);
// console.log(removeElement);
// console.log(twoNumbers);


///////////////////////////////////////////
const numbers03 = [3,6,9,11,44,78];
const slice = numbers03.slice(4,6);
console.log(slice);


//////////////////////////////////////////////
const numbers04 = [22,99,120,140,155];
const splice = numbers04.splice(1,3);
console.log(splice);


////////////////////////////////////////////////
const numbers05 = [140,150,130,170,180,190,200];
const slice2 = numbers05.slice(2,6);
const joinSlice = slice2.join(",");
console.log(joinSlice);


///////////////////////////////////////////////
const numbers06 = [200,210,220,230,240,250,260,270,280,290,300];
const splice2 = numbers06.splice(2,7);
// console.log(slice2)
const joinRemainingElement = numbers06.join(",");
console.log(joinRemainingElement);
// const joinSplice = splice2.join(',');
// console.log(joinSplice);


