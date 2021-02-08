// let animal;
// console.log(animal);





////////////////////////
function add (num1, num2){
    console.log(num1 + num2);
    return ;
}
const result = add(12,12);
console.log(result);



////////////////////////////
function addPartTwo (num3, num4 = 10){
    const total = num3 + num4;
    return total;
}
const result2 = addPartTwo (4);
console.log(result2);


//////////////
const RusselDetails = {id: 44564, country :'UK', city :'London', Balance :'3 Billions',Gender:'Male'};
console.log(RusselDetails.id);
console.log(RusselDetails.phone); // output > udefined no "Phone property" 
console.log(RusselDetails.country);
console.log(RusselDetails.city);
console.log(RusselDetails.wife) //output > undefined "no Property added"

