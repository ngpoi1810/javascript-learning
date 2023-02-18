'use strict';

// Data needed for a later exercise
const flights =
    '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

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
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
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
const obj = {a:23,b:7,c:14};
({a,b} = obj)
console.log(a,b)

//Nested destructuring
const  {fri: {open: o, close:c}} = openingHours
console.log(o,c)

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
const letters = [...str,' ','S.'];
console.log(letters) //lúc này thì spread sẽ tách các chữ cái của str ra và tạo thành một mảng
console.log(...str)
//còn khi ta dùng spread vào template literal thì sẽ bị lỗi
// console.log(`${...str}) **Như này thì sẽ bị lỗi**

//Rest pattern and Parameters ============================================


//Code challenge #1
let players1 = []
let players2 = []
let bayernMunich = {
    gk: 'Vinh',
    fieldPlayers: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
}

