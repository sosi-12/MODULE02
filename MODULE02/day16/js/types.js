'use strict';

// Part 3: Type Predictions & Verifications

console.log('1. "480" + 20          ->', "480" + 20, '| typeof:', typeof ("480" + 20));
console.log('2. "480" - 20          ->', "480" - 20, '| typeof:', typeof ("480" - 20));
console.log('3. Number("480") + 20  ->', Number("480") + 20, '| typeof:', typeof (Number("480") + 20));
console.log('4. Number("abc")       ->', Number("abc"), '| typeof:', typeof Number("abc"));
console.log('5. 480 == "480"        ->', 480 == "480", '| typeof:', typeof (480 == "480"));
console.log('6. 480 === "480"       ->', 480 === "480", '| typeof:', typeof (480 === "480"));
console.log('7. Boolean(0)          ->', Boolean(0), '| typeof:', typeof Boolean(0));
console.log('8. Boolean("Addis")    ->', Boolean("Addis"), '| typeof:', typeof Boolean("Addis"));
console.log('9. null == undefined   ->', null == undefined, '| typeof:', typeof (null == undefined));
console.log('10. null === undefined ->', null === undefined, '| typeof:', typeof (null === undefined));