// lower cse
let personName: string= "Naveerah"
console.log("lowercase:", personName.toLocaleLowerCase())
// upper case
console.log("uppercse:", personName.toLocaleUpperCase())
//Title case
console.log("titlecase:",personName.replace(/\bw/g,c=> c.toUpperCase()))