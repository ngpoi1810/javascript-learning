'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';
  const movs = sort ? acc.movements.slice().sort((a,b) => a - b) : acc.movements
  movs.forEach((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const htmlString = `<div class="movements__row">
    <div class="movements__type movements__type--${type}">${i+1} ${type}</div>
    <div class="movements__value">${mov}€</div>
  </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', htmlString);
  });
};
//add username
const addUserName = function (accs) {
  accs.forEach(acc => {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(x => x[0])
      .join('');
  });
};
addUserName(accounts);
// Calc Balance
const calcPrintBalance = function (acc) {
  acc.balace = acc.movements.reduce((acc, cur) => acc + cur, 0);
  labelBalance.textContent = `${acc.balace}💶`;
};
// Calc In, Out, Interest
const calcPrintSummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, cur) => acc + cur, 0);
  labelSumIn.textContent = `${incomes.toFixed(2)}💶`;
  const outcomes = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, cur) => acc + cur, 0);
  labelSumOut.textContent = `${outcomes.toFixed(2)}💶`;
  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .reduce((acc, cur) => acc + cur, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}💶`;
};
// Update UI
const updateUI = function (acc) {
  displayMovements(acc);
  calcPrintBalance(acc);
  calcPrintSummary(acc);
};
// Event handler login
let currentAccount;
btnLogin.addEventListener('click', function (e) {
  e.preventDefault(); //tắt tính năng mặc định của button (bấm vào sẽ reload lại)
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  // console.log(currentAccount);
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    console.log('Login');
    // Hiển thị UI
    labelWelcome.innerHTML = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    updateUI(currentAccount)
  } else {
    console.log('Login fail');
  }
});
// Transfer money
btnTransfer.addEventListener('click',function(e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value)
  const recentAccount = accounts.find(acc => acc.username === inputTransferTo.value)
  inputTransferTo.value = inputTransferAmount.value = ''
  //Không trùng username, phải có username, tiền >0 <= tiền hiện tại
  if(recentAccount && recentAccount?.username !== currentAccount.username && 0 < amount <=currentAccount.balace) {
    recentAccount.movements.push(amount)
    currentAccount.movements.push(-amount)
    updateUI(currentAccount)
  }
  else {
    console.log('Transfer fail');
  }
})
// Loan mount
btnLoan.addEventListener('click',function(e) {
  e.preventDefault()
  const amount = Number(inputLoanAmount.value)
  if(amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)){
    currentAccount.movements.push(amount)
    updateUI(currentAccount)
  }
  inputLoanAmount.value = ''

})
// Delete account
btnClose.addEventListener('click',function(e) {
  e.preventDefault()
  const index = accounts.findIndex(acc => acc.username === currentAccount.username)
  if(currentAccount.username === inputCloseUsername.value && currentAccount.pin === Number(inputClosePin.value)) {
    accounts.splice(index,1)
    containerApp.style.opacity = 0;
    inputCloseUsername.value = inputClosePin.value = ''
  }
})
// Sort
let flag = false;
btnSort.addEventListener('click',function(e) {
  e.preventDefault()
  displayMovements(currentAccount,!flag)
  flag = !flag
})
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
// Code challenge #1------------------------------
const checkDogs = function (arr1, arr2) {
  const bothArr = arr1.slice(1, -1).concat(arr2.slice(1, -1));
  bothArr.forEach((age, i) => {
    const check =
      age > 3 ? `an adult, and is ${age} years old` : `still a puppy 🐶`;
    console.log(`Dog number ${i + 1} is ${check}`);
  });
};
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// Code challenge #2
const calcAverageHumanAge = function (ageDogs) {
  const init = 0;
  const humanAge = ageDogs
    .map(age => {
      return age <= 2 ? 2 * age : 16 + age * 4;
    })
    .filter(a => a >= 18);
  const average =
    humanAge.reduce((acc, cur, i) => {
      return acc + cur;
    }, init) / humanAge.length;
  console.log(average);
};
calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
