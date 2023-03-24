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
//cách này giúp bạn bỏ ra một value nếu ko muốn set giá trị cho nó thì vẫn sẽ lấy giá trị mặc định
createBooking('lh123',undefined,1000)
// How Passing Arguments Works: Value vs. Reference========================
//phần này thì giống như primitive types với reference types

//First class and Higher-Order function========================
/*
* Luôn nhớ function là objects
* */

//tìm hiểu về Bind, Apply, Call method----------------
console.log('tìm hiểu về Bind, Apply, Call method----------------')
const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    book(flightNumber, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNumber}`)
        this.bookings.push({flight:`${this.iataCode}${flightNumber}`, name})
    }

}
lufthansa.book(239, 'Hai Nguyen')
lufthansa.book(142, 'Trung Vinh')
console.log(lufthansa)
const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings:[]
}
//ta sẽ có một ví dụ sau
//gán một biến = function book bên trong object lufthansa thì sẽ như thế nào
const book = lufthansa.book;
// book(23,'Hai Nguyen') //Sẽ ra lỗi vì đây là một regular function mà một
//regular function thì keyword this sẽ là underfined
//và làm sao để fix được và làm cách nào để xác định rõ this keyword sẽ trỏ vào đâu
//đầu tiên ta sẽ dùng call method
book.call(eurowings,23,'AAAA') // tham số đầu tiên là nơi this keyword trỏ tới còn lại
//là 2 tham số của book method
//Apply method cũng tương tự nhưng sau ghi truyền object để xác định this keyword trở thì những tham số sau phải cho vào một array ví dụ như sau
const arrEuro = [222, 'BBBB']
book.apply(eurowings,arrEuro)