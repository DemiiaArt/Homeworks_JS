let numOrStr = prompt('input number or string');
// console.log(numOrStr)

// if(numOrStr === null) {
// console.log('ви скасували')
// } else if( numOrStr.trim() === '' ) {
// console.log('Empty String');
// } else if ( isNaN( +numOrStr ) ) {
// console.log(' number is Ba_NaN')
// } else {
// console.log('OK!')
// }


switch (numOrStr === null) {
    case true:
        console.log('ви скасували');
        break;
    default:
        switch (numOrStr.trim()) {
            case '': 
                console.log('Empty String');
                break;
            default: 
                switch (isNaN(numOrStr)) {
                    case false:
                        console.log(' number is Ba_NaN');
                        break;
                    default: 
                        console.log('OK!');
                        break;
                }
        }
}
