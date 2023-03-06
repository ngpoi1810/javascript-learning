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
const add = function(...numbers) { //...numbers này là một rest parameters
    console.log(numbers)
}
add(2,3)
add(1,2,3,4)
add(1,2,3,4,5,6,76,7,8)
//Nâng cao hơn một xíu cho function khi dùng REST
const n = [2,5,7,4,3,6] //Là chúng ta sẽ dùng Spread để thêm vào function
add(...n)

//SHORT CIRCUITING (&& AND ||)========================
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
    scored:['Lewandowski','Gnarby','Lewandowski','Hummels'],
    date:'Nov 9th, 2037',
    odds: {
        team1:1.33,
        x:3.25,
        team2:6.5
    }
}
//1
const [players1, players2] = game.players
console.log(players1)
//2
const [gk,...fieldPlayers] = players1
console.log(gk,fieldPlayers)
//3
const allPlayers = [...players1,...players2]
console.log(allPlayers)
//4
const players1Final = [...players1,'Thiago','Coutinho','Perisic']
console.log(players1Final)
//5
const {team1, x: draw, team2} = game.odds
console.log(team1,draw,team2)
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
const properties = Object.keys(openingHours)
console.log(properties)
for (const day of properties) {
    console.log(day)
}
const values = Object.values(openingHours)
console.log(values)

const entries =  Object.entries(openingHours)
console.log(entries)
for(const [key, {open, close}] of entries) {
    console.log(`On ${key} we open at ${open} and close at ${close}`)
}
//Coding challenge #2================================================
for(const x of Object.entries(game.scored)) {
    console.log(`${x[0]}: ${x[1]}`)
}