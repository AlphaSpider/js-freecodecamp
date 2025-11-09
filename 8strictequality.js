// Strict equality operator
// Equality operator converts both values being compared to a common type
// Whereas strict equality operator does not do the type convertion

function testStrict(val){
    if (val==="7"){
        return "Equal"
    }
    return "Not Equal"
}
console.log(testStrict(7))

function testEqual(val){
    if (val=="7"){
        return "Equal"
    }
    return "Not Equal"
}
console.log(testEqual(7))