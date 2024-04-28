// used the given e and factorial code to generate my correct answers

const fs = require('fs');
const assert = require('assert');
eval(fs.readFileSync('code.js')+'');

// assert(factorial(10) === 3628800);
// assert(e(10) === 2.7182818011463845);

assert(dynamic_e(0) === 1)
assert(dynamic_e(1) === 2)
assert(dynamic_e(2) === 2.5)
assert(dynamic_e(3) === 2.6666666666666665)
assert(dynamic_e(5) === 2.7166666666666663)
assert(dynamic_e(10) === 2.7182818011463845)
assert(dynamic_e(50) === 2.7182818284590455)
assert(dynamic_e(100) === 2.7182818284590455)
