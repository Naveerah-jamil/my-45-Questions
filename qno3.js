// lower cse
var personName = "Naveerah";
console.log("lowercase:", personName.toLocaleLowerCase());
// upper case
console.log("uppercse:", personName.toLocaleUpperCase());
//Title case
console.log("titlecase:", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
