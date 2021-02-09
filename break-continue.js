const num = [22,3,4,5,6,7,8,9,31];
for (let i = 0; i < num.length; i++) {
    if(num[i]>31){
        continue;
    }
    console.log(num[i]);
}


//////////////////////////////////////////////////

const num2 = [22,3,4,-5,-6,77,-78,9,31];
for (let i = 0; i < num2.length; i++) {
    const element = num2[i];
    if(element<0){
        break;
    }
    console.log(element);  
}

//////////////////////////////////////////////////////
const number4 = [12,12,20,30,40,-78,-72, 100,2000];

for (let i = 0; i < number4.length; i++) {
    const result = number4[i];
    if(result<0){
    continue;        
    }
    console.log(result);
}