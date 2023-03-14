'use strict';

// Data needed for a later exercise
const flights = '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    other: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
    },
    openingHours: {
        thu: {
            open: 12, close: 22,
        }, fri: {
            open: 11, close: 23,
        }, sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },
};
//Destructuring Arrays ==================================================
console.log('=================Destructuring Arrays==================')
// let [first, second] = restaurant.categories;
// console.log(first, second)

//Destructuring Objects ===============================================
const {name, openingHours, categories} = restaurant // Phải đặt tên biến đúng với tên key trong object
console.log(name, openingHours, categories)

//Mutating destructuring
let a = 111;
let b = 999;
const obj = {a: 23, b: 7, c: 14};
({a, b} = obj)
console.log(a, b)

//Nested destructuring
const {fri: {open: o, close: c}} = openingHours
console.log(o, c)

//Spread Operator ========================================================
console.log('=================Spread Operator==================')
//Làm cách thông thường ------
const arr = [7, 8, 9]
//Cách như này làm vẫn được nhưng không hiệu quả
const badNewArr = [1, 2, arr[0], arr[1], arr[2]]
console.log(badNewArr)

//Áp dụng Spread -------------
const newArr = [1, 2, ...arr]
console.log(newArr)
//Cho một ví dụ áp dụng spread
const newMenu = [...restaurant.mainMenu, 'Gnocci'] //Thêm một phần tử vào mảng đã có sẵn
console.log(newMenu)
//Tiếp theo chúng ta sẽ dùng spread để join 2 array lại với nhau
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu)
//Interables(lặp): arrays, strings, map, sets. NOT objects
const str = 'Jonas'
const letters = [...str, ' ', 'S.'];
console.log(letters) //lúc này thì spread sẽ tách các chữ cái của str ra và tạo thành một mảng
console.log(...str)
//còn khi ta dùng spread vào template literal thì sẽ bị lỗi
// console.log(`${...str}) **Như này thì sẽ bị lỗi**

//Rest pattern and Parameters ============================================
console.log('==============Rest pattern and Parameters=================')
/*
Rest thì cũng giống như Spread nhưng thay vì khai báo bên phải dấu bằng như Spreadt thì ta sẽ khai kháo bên trái dấu bằng
*/
//Ta sẽ có ví dụ như nhau
//*Một lưu ý là Rest phải được dùng ở cuối cùng khi khai báo
const [x, y, ...others] = [1, 2, 3, 4, 5];
console.log(x, y, others)
//Bây giờ ta sẽ thêm một ví dụ nữa và sẽ dùng đến Object đã cho ở trên
const {sat, ...weekdays} = restaurant.openingHours
console.log(weekdays)
//Ví dụ thêm về Rest khi áp dụng trong function
const add = function (...numbers) { //...numbers này là một rest parameters
    console.log(numbers)
}
add(2, 3)
add(1, 2, 3, 4)
add(1, 2, 3, 4, 5, 6, 76, 7, 8)
//Nâng cao hơn một xíu cho function khi dùng REST
const n = [2, 5, 7, 4, 3, 6] //Là chúng ta sẽ dùng Spread để thêm vào function
add(...n)

//SHORT CIRCUITING (&& AND ||)========================
console.log('==============SHORT CIRCUITING (&& AND ||)=================')
//Dùng data bất kỳ, trả về dữ liệu bất kỳ, được gọi là short-circuiting
//OR*********
console.log(3 || 'Jonas') // dấu HOẶC(||) sẽ trả về cho chúng ta giá trị truthy đầu tiên
console.log('' || 'Jonas')
console.log(true || 0)
console.log(undefined || null) // Nếu cả hai là falsy thì sẽ lấy biến falsy cuối cùng
//AND***********
console.log(0 && 'Jonas') //Khi gặp falsy thì sẽ ngay lập tức trả về giá trị falsy
console.log(7 && 'Jonas') //Khi cả hai đều là truthy thì sẽ trả về giá trị truthy cuối cùng
//??************
const number = 0 ?? 'Jonas' //?? thì 0 và ' ' sẽ không phải là falsy
console.log(number)


//Code challenge #1
console.log('==============Code challenge #1=================')
const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ]
    ],
    score: '4.0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5
    }
}
//1
const [players1, players2] = game.players
console.log(players1)
//2
const [gk, ...fieldPlayers] = players1
console.log(gk, fieldPlayers)
//3
const allPlayers = [...players1, ...players2]
console.log(allPlayers)
//4
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic']
console.log(players1Final)
//5
const {team1, x: draw, team2} = game.odds
console.log(team1, draw, team2)
//6
const printGoals = function (...players) {
    console.log(players)
    console.log(`${players.length} goals`);
}
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich')
//7
team1 < team2 && console.log('Team 1 is more likely to win');

//Looping Array: The for-of loop=========================================

//Optional Chaining======================================================
console.log(restaurant.openingHours.mon?.open);
//Looping Objects: Object Keys, Values and Entries================
console.log('===============Looping Objects: Object Keys, Values and Entries=====================')
const properties = Object.keys(openingHours)
console.log(properties)
for (const day of properties) {
    console.log(day)
}
const values = Object.values(openingHours)
console.log(values)

const entries = Object.entries(openingHours)
console.log(entries)
for (const [key, {open, close}] of entries) {
    console.log(`On ${key} we open at ${open} and close at ${close}`)
}
//Coding challenge #2================================================
console.log('===============CODING CHALLENGE #2=====================')
//1
for (const x of Object.entries(game.scored)) {
    console.log(x[0] + ': ' + x[1])
}
//2
let average = 0
for (const x of Object.values(game.odds)) {
    average += x
}
console.log(`Average score: ${average / 3}`)

//3

for (const [team, odd] of Object.entries(game.odds)) {
    const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`
    console.log(`Odd of ${teamStr}: ${odd}`)
}

//SETS ==============================================
//Tạo sets
// Trong set mình sẽ cho vào một interable thông thường thì sẽ dùng mảng
console.log('==============SETS===============')
const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta'])
//Khi log ra bạn sẽ thấy những phần tử trùng lập trong Set sẽ được nhóm lại với nhau thành một
//Các phần tử trong này sẽ là duy nhất(irrelevant)
console.log(ordersSet)
//Khi truyền vào một String thì Set sẽ tách ra thành các chữ cái là sẽ nhóm các phần tử giống nhau lại thành một
console.log(new Set('nguyen'))
//Chúng ta sẽ đi vào các cách làm việc với Set
//1. Đầu tiên là về kích thước(sized) của Set
console.log(ordersSet.size)
//2. Tiếp theo chúng ta có thể kiểm tra một phần tử nào đó có trong Set hay không
//Sẽ trả về giá trị True hoặc False
console.log(ordersSet.has('Pizza'))
console.log(ordersSet.has('Bread'))
//3. Tiếp theo chúng ta có method thêm(add) phần tử mới vào Set
//Khi thêm một phần tử rồi thêm tiếp một phần tử nữa giống nhau thì cái này sẽ bị ignore đi
// Vì Set là duy nhất
ordersSet.add('Garlic Bread')
ordersSet.add('Garlic Bread')
console.log(ordersSet)
//4. Cuối cùng ta có method xóa(Delete)
//Và không dùng index để delete được
//orderSet.delete([1])
ordersSet.delete('Risotto')

//MAPS: FUNDAMENTALS=================================
console.log('========MAPS: FUNDAMENTALS============')
/*Đầu tiên thì Map cũng giống như Object là được lưu trữ trong cặp key và value
Sự khác biệt ở đây là ở Map thì Keys có thể có Type bất kỳ. Trong Object thì keys
cơ bản luôn là String. Nhưng trong map thì bạn có thể có bất kỳ type nào cho keys
*/
//Khởi tạo Map
const rest = new Map()
//Sau đó để fill out vào Map ta sẽ dùng method set()
//Với tham số đầu tiên là key tiếp theo là value
rest.set('name', 'Classico Italiano')
rest.set(1, 'Firenze, Italy')
rest.set(2, 'Lisbon, Portugal')
//Hoặc bạn có thể fill out vào như thế này
rest.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
    .set('open', 11).set('close', 23).set(true, 'We are open :D').set(false, 'We are closed :(')
//Và bây giờ để đọc được data từ map chúng ta dùng method get
console.log(rest.get('name')) //truyền key vào get để lấy được value
//Ta sẽ có một ví dụ thú vị sau
//Nó khá thông minh nhưng không thực sự dễ đọc nên đừng lạm dụng loại mô hình này
//Đây chỉ là một ví dụ để cho thấy được sức mạnh khi có key Boolean trong map
const time = 21
console.log(rest.get(rest.get('open') < time < rest.get('close')))
//Tiếp theo ta đến với method has để check xem là key đó có tồn tại trong map hay không
console.log(rest.has('categories')) // sẽ trả về true hoặc false
//Ta đên với method delete
rest.delete('name')
rest.delete(2)
console.log(rest)
//2 method cuối cùng size và clear
console.log(rest.size)
rest.clear()//clear tất cả element hiện có trong map
//Ta sẽ cho một trường hợp về việc dùng key là array trong map
rest.set([1, 2], 'Test')
console.log(rest)
console.log(rest.get([1, 2])) //Kêt quả sẽ ra underfined
// Bởi vì các phần tử array ở trên set và get là khác nhau, chúng không cùng một địa chỉ nên việc gọi như thế này sẽ không đúng
//Nên kết quả sẽ là underfined để khắc phục việc này bạn làm như sau
const arr1 = [2, 3]
rest.set(arr1, 'Test 2')
console.log(rest)
console.log(rest.get(arr1))

//MAPS: INTERATION========================================
console.log('==================MAPS: INTERATION==================')
//Chúng ta sẽ dùng một cách khác nữa thay vì dùng set method cho Map
// Quizz app
const question = new Map([
    ['question', 'What is the best programming language in the world?'],
    [1, 'C'],
    [2, 'Java'],
    [3, 'Javascript'],
    ['correct', 3],
    [true, 'Correct 🎉'],
    [false, 'Try again!']
])
console.log(question.get('question'))
for (const [key, value] of question) {
    if (typeof key === 'number') {
        console.log(`Answer ${key}: ${value}`)
    }
}
// const answer = Number(prompt('Your answer'))
const answer = 3
console.log(question.get(answer === question.get('correct')))
// Có một cách chúng ta convert từ Object sang Map như sau+++++++++
// Chúng ta sẽ dùng Object openingHour để làm ví dụ
// console.log(Object.entries(openingHours))
// const hoursMap = new Map(Object.entries(openingHours))
// console.log(hoursMap)
// Covert Map sang Array+++++++
// console.log(...question)

//Code challenge #3==================
console.log('============Code challenge #3============')
const gameEvents = new Map([
    [17, '⚽ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🟨 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽ GOAL'],
    [80, '⚽ GOAL'],
    [92, '🟨 Yellow card'],
]);
//1
console.log(gameEvents.values())
const events = [...new Set(gameEvents.values())]
console.log(events)
//2
gameEvents.delete(64)
console.log(gameEvents)
//3
console.log(gameEvents.size)
//4
for (const [key, value] of gameEvents) {
    if (key <= 45) {
        console.log(`[FIRST HALF] ${key}: ${value}`)
    } else {
        console.log(`[SECOND HALF] ${key}: ${value}`)
    }
}

//Working with string==============================
console.log('===================Working with string=================')
const airline = 'TAP Air Portugal'
const plane = 'A320'
// Đầu tiên giống như Array ta có thể lấy ký tự từ một vị trí nhất định
console.log(plane[0]) // Nhưng tất cả đều vẫn là string
//Nên để chuyển thành Number thì ta phải convert
//Tiếp theo ta có thể dùng length để tính chiều dài
console.log(airline.length)
//Một số Method phổ biến của String như:
//Index of: Cho biết vị trí của phần tử
console.log(airline.indexOf('r'))
//Và đôi khi ta cũng cần tính từ cuối phần tử
console.log(airline.lastIndexOf('r'))
//Slice
console.log(airline.slice(4))// slice sẽ cắt chuỗi và ta sẽ có một substring(chuỗi con)
console.log(airline.slice(4, 7))//Bắt đầu cắt từ 4 và kết thúc ở 7
console.log(typeof new String('Poi')) //type này sẽ cho ra object
//String part 2
//Chúng ta có method toLowerCase và toUpperCase
const passenger = 'jOnAs'
console.log(passenger.toLowerCase())
console.log(passenger.toUpperCase())
//Dùng biến này để thành Jonas
const passengerLower = passenger.toLowerCase()
const passengerJonas = passenger[0].toUpperCase() + passengerLower.slice(1)
console.log(passengerJonas)
// Tiếp theo ta có method Trim() với ví dụ như sau
const emailUser = '  user@Gmail.CoM   \n'
//trim(): Xóa khoảng trống đầu và cuối một string
console.log(emailUser.toLowerCase().trim())
// Tiếp theo là method: Replace
