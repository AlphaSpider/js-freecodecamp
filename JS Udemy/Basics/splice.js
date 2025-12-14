// The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
// SYNTAX:
    // let arrDeletedItem = array.splice(start, deleteCount, item1, item2, ...itemN)
        //- start → Index where changes begin. If negative, it counts from the end
        //- deleteCount → Number of elements to remove. - If 0, no elements are removed.
        //- item1, item2, ...itemN → Elements to add at the start position. - If omitted, splice() only removes elements.


const months=['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
console.log(months)

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
colors.splice(5,1);
console.log(colors)

colors.splice(2, 0, "orange-light-yellow", "light yellow-yellow");
console.log(colors)