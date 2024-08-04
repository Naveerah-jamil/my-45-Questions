let places: string[] = ['Dehli', 'Canada', 'Afghanistan', 'Egypt', 'Bangladesh']
console.log('original: ' + places);
console.log('copy: ' + [...places ].sort());
//original
console.log('original: ' + places);
// Reverse order
console.log('copy: ' + [...places ].sort().reverse());
// original
console.log('copy: ' + [...places].sort().reverse());
// order change 
console.log('original:' + places.sort());
//Reverse the order
console.log('original: '+ [...places].sort().reverse());

