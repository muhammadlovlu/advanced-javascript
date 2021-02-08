const numbers = [2,4,5,9,4,3,7,2,4,1,7];
const output = [];
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    const result1 = element * element;
    output.push(result1);                              
}
console.log(output);
 

// //////////////////////////////////
const numbersTwo = [2,3,4,5,6,7,8,9];
const outputTwo = [];
for (let i = 0; i < numbersTwo.length; i++) {
    const element = numbersTwo[i];
    const resultTwo = element * element;
    outputTwo.push(resultTwo)
}
console.log(outputTwo);


//////////////////////////////////////
const digits = [2,4,5,9,4,3];
const result2 = digits.map(function(multiply){
    return multiply * multiply;
})
console.log( result2);

const result3 = digits.map(function(minus){
    return minus - minus;
})
console.log(result3);

const plus = digits.map(function(Plus){
    return Plus + Plus;
})
console.log(plus);


/////////////////////////////////////
const newLine = digits.map(function(newElement, index, array){
    console.log(newElement, index, array)
})
or 
const newLine = digits.map(x => x*x);

////////////////////////////////////
const square = elementThree => elementThree * elementThree;
const square = x => x*x ;





////////////////////////////////////

const element4 = digits.map(x => x*x);
console.log(element4);


//////////////////////////////////////


const element5 = digits.map(x => x+x);
console.log(element5);


///////////////////////////////////////
const element6 = digits.map(x => x-x);
console.log(element6);


///////////////////////////////////
const element7 = digits.map(x =>x%x);
console.log(element7);


////////////////////////////////////
