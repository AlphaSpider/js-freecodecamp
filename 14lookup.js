function objlookup(val){
    var result="";
    var lookup = {
        "Charlie":"Dul",
        "Michael": "Tov",
        "Philip": "Prith",
        "Prakash": "Fa"
};
result=lookup[val];
return result;

}

console.log(objlookup("Charlie"));