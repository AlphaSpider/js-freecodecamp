function myQueue(arr, item){
    arr.push(item);
    rmd=arr.shift();
    return rmd;
}
var testArr=[1,2,3,4,5];
console.log("Before: " + JSON.stringify(testArr));
console.log(myQueue(testArr, 6));
console.log("After: "+ JSON.stringify(testArr));