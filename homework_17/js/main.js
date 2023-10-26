/*//Код без пояснень

const allSumm = function() {
  let sum = 0;
  
  return function(a) {
    sum += a;

    return sum;
  };
};

const sum = allSumm();

console.log(sum(3));//3
console.log(sum(5));// 8
console.log(sum(20));// 28
*/


// //Код із поясненнями

/**
* Global env
* Record: {}
* Parent: null
*/

/*[Environment] = Global environment*/

const allSumm = function() {

  /**
  * allSumm env
  * Record: {}
  * Parent: Global env
  */

  let sum = 0;

  /**1
  * allSumm env
  * Record: {sum: 0}
  * Parent: Global env
  */

  /**2
  * allSumm env
  * Record: {sum: 3}
  * Parent: Global env
  */
  
  /*[Environment] = allSumm env*/

  return function(a) {

    /**
    * sum env
    * Record: {a: 3}
    * Parent: allSumm env
    */

    sum += a;

    /**
    * sum env
    * Record: {a: 3}
    * Parent: allSumm env
    */

    return sum;
  };
};

/**
* Global env
* Record: {allSumm: <function>}
* Parent: null
*/

const sum = allSumm(); 

/**
* Global env
* Record: {allSumm: <function>, sum: <function>}
* Parent: null
*/

// console.log(sum(3));// return sum = 3 та перезаписує змінну sum в ф-ції allSumm

/**
* Global env
* Record: {allSumm: <function>, sum: <function>}
* Parent: null
*/
let result1 =  sum(3);

let result2 =  sum(5);

let result3 =  sum(20);

let sum2 =  allSumm();

let result2_1 = sum2(965);
let result2_2 = sum2(25);

console.log(result1, result2, result3);
console.log(result2_1, result2_2);

// console.log(sum(5));// return sum = 8
// console.log(sum(20));// return sum = 28
