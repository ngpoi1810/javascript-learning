//Coding Challenge #1
function calcAverage(score1, score2, score3) {
    return (score1 + score2 + score3) / 3;
}
function checkWinner() {
    let avgDolphins = calcAverage(85,54,41)
    let avgKoalas = calcAverage(23,34,27)
    if(avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`)
    }
    else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`)
    }
    else {
        console.log('Nothing')
    }
}
checkWinner();

//Coding Challenge #2
let bills = [123,555,44];
function calcTip (value) {
    let tip = 50 <= value <= 300 ? value * 0.15 : value * 0.2;
    return `The bill was ${value}, the tip was ${tip}, and  the total value ${value + tip}`;
}
let tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];
console.log(tips[0]);
console.log(tips[1])
console.log(tips[2])

//Coding Challenge #3
let John = {
    fullName: 'John Smith',
    mass:78,
    height:1.69,
    calcBMI: function () {
        return this.mass / this.height ** 2
    }
}
let Mark = {
    fullName: 'Mark Miler',
    mass:92,
    height:1.95,
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

