const day=prompt('Enter a day!').toLowerCase();

if(day=='monday'){
    console.log("I love mon!");
}else if(day=='thursday'){
    console.log("I love thr");
}else{
    console.log("Nah!")
}

if(phrase=='stop'){
console.log("red");
}
else if(phrase=='slow'){
console.log("yellow");
}
else if(phrase=='go'){
console.log("green");
}else {
console.log("purple");
}

// GAMEEEEEE!!!!!!!!!!!!

let maximum = parseInt(prompt("Enter a maximum number!")); //parseint is for only take is the entered is int
const targetNum= Math.floor(Math.random()*maximum)+1;
console.log(targetNum)