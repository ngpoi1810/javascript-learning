//Coding Challenge #1
function calcAverage(score1, score2, score3) {
    return (score1 + score2 + score3) / 3;
}

function checkWinner() {
    let avgDolphins = calcAverage(85, 54, 41)
    let avgKoalas = calcAverage(23, 34, 27)
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`)
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`)
    } else {
        console.log('Nothing')
    }
}

checkWinner();

//Coding Challenge #2
let bills = [123, 555, 44];

function calcTip(value) {
    let tip = 50 <= value <= 300 ? value * 0.15 : value * 0.2;
    return `The bill was ${value}, the tip was ${tip}, and  the total value ${value + tip}`;
}

let tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips[0]);
console.log(tips[1])
console.log(tips[2])

//Coding Challenge #3
let John = {
    fullName: 'John Smith',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        return this.mass / this.height ** 2
    }
}
let Mark = {
    fullName: 'Mark Miler',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        return this.mass / this.height ** 2
    }
}
if (Mark.calcBMI() > John.calcBMI()) {
    console.log(
        `Mark's BMI (${Mark.calcBMI()}) is higher than John's (${John.calcBMI()})!`
    );
} else {
    console.log(
        `John's BMI (${John.calcBMI()}) is higher than Mark's (${Mark.calcBMI()})!`
    );
}

//Coding Challenge #4

function calcTip(bill) {
    return 50 <= bill <= 300 ? bill * 0.15 : bill
    0.2;
}

let bills2 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips2 = [];
let totals = [];

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i])
    tips2.push(tip);
    totals.push(tip + bills[i])
}
const calcAverage2 = (arr) => {
    let sum = 0
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length

}
console.log(`Bill: ${calcAverage2(bills2)} Tip: ${calcAverage2(tips2)} Total: ${calcAverage2(totals)}`);
