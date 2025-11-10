var myDog = {
    "name": "Harper",
    "legs": 4,
    "tails": 1,
    "friends": ["Juniper"],
}

dname=myDog.name;
console.log(dname);

// adding property
myDog.bark="bow-bow"
console.log(myDog);  

// deleting property
delete myDog.bark;
console.log(myDog); 