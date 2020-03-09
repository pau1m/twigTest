const groupArray = require('./groupArray');

// Although this gives a different grouping result from the pseudo-code,
// It could be argued that it does match the spec.
const result = groupArray([1,2,3,4,5], 3);
// expect: [ [ 1 ], [ 2 ], [ 3, 4, 5 ] ]

console.log(result);