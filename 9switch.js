function fruits(val){
    var ans="";
    switch(val){
        case 1: 
            ans="apple";
            break;
        case 2: 
            ans="banana";
            break;
        case 3:
            ans="orange";
            break;
        default:
            ans="veg";
    }
    return ans;
}

console.log(fruits("1"));
