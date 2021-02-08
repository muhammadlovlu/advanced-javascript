function stopWatch(){
    let count = 0;
    return function(){
        count++;
        return count;
    }
}

const stClock = stopWatch();
console.log(stClock());
console.log(stClock());
console.log(stClock());
console.log(stClock());


const clock2 = stopWatch();
console.log(clock2());
console.log(clock2());
console.log(stClock());
console.log(stClock());


//////////////////////////////////
function serial(){
    let count = 20;
    return function(){
        count++;
        return count;
    }
}

const newNumber = serial();
console.log(newNumber());
console.log(newNumber());
console.log(newNumber());
console.log(newNumber());


const newNumber2 = serial();
console.log(newNumber2());
console.log(newNumber2());
console.log(newNumber());
console.log(newNumber());


//////////////////////////////////////