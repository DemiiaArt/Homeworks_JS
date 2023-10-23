

/**
* Global env
* Record: {}
* Parent: null
*/

const arrayWithoutControl = [11, 'Dan', 755, true, 25, 'Hello', 6];

/**
* Global env
* Record: {arrayWithoutControl: []}
* Parent: null
*/

const numberCalculeting = function (myArray) {

    /**
    * numberCalculeting env
    * Record: {myArray: []}
    * Parent: Global env
    */

    let numberFilter = myArray.filter(item => typeof item === 'number')

    /**
    * numberCalculeting env
    * Record: {myArray: [], numberFilter: <function>}
    * Parent: Global env
    */

    if (numberFilter.length === 0) {
        return 'There are no numbers =('
    }

    let numbersSumm = numberFilter.reduce(function(summ, numbersItem) {

        /**
        * numbersSumm env
        * Record: {summ: , numbersItem: }
        * Parent: numberCalculeting env
        */

        return summ += numbersItem;
    }, 0);

    /**
    * numberCalculeting env
    * Record: {myArray: [], numberFilter: <function>, numbersSumm: <function>}
    * Parent: Global env
    */

    let numberAverage = numbersSumm / numberFilter.length;

    /**
    * numberCalculeting env
    * Record: {myArray: [], numberFilter: <function>, numbersSumm: <function>, numberAverage:  }
    * Parent: Global env
    */

    return Math.floor(numberAverage);
};

/**
* Global env
* Record: {arrayWithoutControl: [], numberCalculeting: <function>}
* Parent: null
*/

console.log('Дано масив: ', arrayWithoutControl);
console.log('Середнє арифметичне лише числових елементів даного масиву: ', numberCalculeting(arrayWithoutControl));

/**
* Global env
* Record: {arrayWithoutControl: [], numberCalculeting: <function>}
* Parent: null
*/
