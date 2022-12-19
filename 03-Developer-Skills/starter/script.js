// Remember, we're gonna use strict mode in all scripts now!
'use strict';
//Code challenge #1
let arr1 = [1, 3, 2]
function printForecast(arr) {
    let text = '';
    for(let i = 0; i < arr.length; i++) {
        text += `${String(arr[i])}C in ${i+1} days...`;
    }
    return text;
}

console.log(printForecast(arr1))

