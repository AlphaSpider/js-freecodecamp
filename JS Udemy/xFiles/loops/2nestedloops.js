const students = [["Ajay", "Vishnu", "Aswin", "Arjun"],
                  ["Devika", "Anjima", "Srilekshmi"],
                  ["Shiva", "Sooraj", "Ashray"],
                  ["Pranav", "Sona", "Aswathy"],
                  ["Sanjo", "Mahi", "Ashwin D"] 
]

for(i=0; i<students.length; i++){
    let row=students[i];
    for(j=0; j<row.length; j++){
        console.log(row[j])
    }
}