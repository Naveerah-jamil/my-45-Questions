var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var places = ['Dehli', 'Canada', 'Afghanistan', 'Egypt', 'Bangladesh'];
console.log('original: ' + places);
console.log('copy: ' + __spreadArray([], places, true).sort());
//original
console.log('original: ' + places);
// Reverse order
console.log('copy: ' + __spreadArray([], places, true).sort().reverse());
// original
console.log('copy: ' + __spreadArray([], places, true).sort().reverse());
// order change 
console.log('original:' + places.sort());
//Reverse the order
console.log('original: ' + __spreadArray([], places, true).sort().reverse());
