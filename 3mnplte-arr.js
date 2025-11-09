// manipulate array with push()
var Arr=["Simpson", "got", "Cat" ]
Arr.push(["at", "his", "home"])
console.log(Arr)

var newArr = [["john", 23], ["cat", 2]]
newArr.push(["dog", 23])
console.log(newArr)

// manipulate array with pop()
console.log("POP")
var ourArray=[1,2,3];
var newArr2=ourArray.pop()
console.log(newArr2)

var strArr=[["John", 23], ["cat", 2]]
varnewstrAr=strArr.pop()
console.log(strArr)

// manipulate array with shift()
// remove an element from the end of an array
var myArray=[["Jacob", 24], ["kangaroo", 2]]
var removedFromMyArray=myArray.shift();
console.log(myArray);
console.log(removedFromMyArray);

// manipulate array with unshift()
// unshift is like push(), instead of adding elements to the end of the array it adds to the beginning
var unshiftedArray=["Stimpson", "J", "cat"];
unshiftedArray.shift();
console.log(unshiftedArray);
unshiftedArray.unshift("Happy");
console.log(unshiftedArray);