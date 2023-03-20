'use strict';
// Default Parameters===========================
console.log('===============Default Parameters=================')
//đầu tiên ta tạo một function như bình thường
const bookingArr = []
const createBooking = function (flightNum, numPassengers = 1,price = 199) {
    //dùng enhanced object leteral
    //và để set default value cho parameters
    //khi dùng es5 sẽ như sao
    // numPassengers = numPassengers || 1;
    // price = price || 199;
    //ta sẽ dùng ES6 để set default value tốt hơn ở trên
    const booking = {
        flightNum,
        numPassengers,
        price
    }
    console.log(booking)
    bookingArr.push(booking)
}
createBooking('LH123')
//cách này giúp bạn bỏ ra một value nêu ko muốn set giá trị cho nó
createBooking('lh123',undefined,1000)

// How Passing Arguments Works: Value vs. Reference