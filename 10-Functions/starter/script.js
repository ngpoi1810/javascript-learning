'use strict';
// Default Parameters===========================
console.log('===============Default Parameters=================')
//đầu tiên ta tạo một function như bình thường
const bookingArr = []
const createBooking = function (flightNum, numPassengers = 1, price = 199) {
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
createBooking('lh123', undefined, 1000)
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
        this.bookings.push({flight: `${this.iataCode}${flightNumber}`, name})
    }

}
lufthansa.book(239, 'Hai Nguyen')
lufthansa.book(142, 'Trung Vinh')
console.log(lufthansa)
const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: []
}
//ta sẽ có một ví dụ sau
//gán một biến = function book bên trong object lufthansa thì sẽ như thế nào
const book = lufthansa.book;
// book(23,'Hai Nguyen') //Sẽ ra lỗi vì đây là một regular function mà một
//regular function thì keyword this sẽ là underfined
//và làm sao để fix được và làm cách nào để xác định rõ this keyword sẽ trỏ vào đâu
//đầu tiên ta sẽ dùng call method
book.call(eurowings, 23, 'AAAA')// tham số đầu tiên là nơi this keyword trỏ tới còn lại
//là 2 tham số của book method
//Apply method cũng tương tự nhưng sau ghi truyền object để xác định this keyword trở thì những tham số sau phải cho vào một array ví dụ như sau
const arrEuro = [222, 'BBBB']
book.apply(eurowings, arrEuro)
//Bind Method-------------------
/*Sự khác nhau của bind ở đây là không gọi function ngay lập tức
* Thay vào đó nó trả về một new function
* Nơi mà this keyword được ràng buộc
* */
//Ví  dụ về bind
const bookEW = book.bind(eurowings)// bind sẽ tạo ra luôn cho mình một function eurowings mới
bookEW(103, 'Poi')

//Coding Challenge #1===============================
console.log('-------Code challenge #1----------')
const poll = {
    question: "What is your favourite programming language?",
    options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
    // This generates [0, 0, 0, 0]. More in the next section!
    answers: new Array(4).fill(0),
    registerNewAnswer() {
        /*Đầu tiên chúng ta sẽ đưa value của question và option hiển thị trên prompt
        chuỗi của options thì ta có thể dùng join để liệt kê ra
        * */
        const bbb = Number(prompt(`${this.question}\n${this.options.join('\n')}\n(Write option number))}`))
        console.log(bbb)
        /*Tiếp theo là kiểm tra xem có phải là số hay không
        * Và số này có nằm trong phạm vi từ 0 đên 3 hay không
        * cuối cùng là sẽ cộng 1 đơn vị tại vị trí đó trong mảng
        * */
        typeof bbb === 'number' && bbb < this.answers.length && this.answers[bbb]++
        console.log(this.answers)
    },
    displayResults() {

    }
};
// poll.registerNewAnswer()
//Gọi sự kiện click để hiển thị câu khảo sát
document.querySelector('.poll').addEventListener('click',poll.registerNewAnswer.bind(poll))