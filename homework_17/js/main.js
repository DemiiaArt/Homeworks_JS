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

const allSumm = function() {

  /**
  * allSumm env
  * Record: {}
  * Parent: Global env
  */

  let sum = 0;

  /**
  * allSumm env
  * Record: {sum: 0}
  * Parent: Global env
  */
  
  return function(a) {

    /**
    * sum env
    * Record: {a: 3}
    * Parent: allSumm env
    */

    sum += a;

    /**
    * sum env
    * Record: {a: 3, sum: 3}
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

console.log(sum(3));// return sum = 3 та перезаписує змінну sum в ф-ції allSumm

/**
* Global env
* Record: {allSumm: <function>, sum: <function>}
* Parent: null
*/

console.log(sum(5));// return sum = 8
console.log(sum(20));// return sum = 28
