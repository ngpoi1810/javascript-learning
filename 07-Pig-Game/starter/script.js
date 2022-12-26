'use strict';
//Khai báo các biến select đến các elements
let score0 = document.getElementById('score--0')
let score1 = document.getElementById('score--1')
let diceEl = document.querySelector('.dice')
//Khai báo biến điểm hiện tại của Player 1 và 2
let current0 = document.getElementById('current--0')
let current1 = document.getElementById('current--1')
//Khai báo biến button Roll Dice
let btnRoll = document.querySelector('.btn--roll')

//Reset điểm về 0 và ẩn xúc xác
score0.textContent = 0
score1.textContent = 0
diceEl.classList.add('hidden')
let currentStore = 0 //Biến điểm

//Viết hàm xử lý lắc xúc xắc cho nút Roll Dice
btnRoll.addEventListener('click', function () {
    //Thêm biến để tao random số xúc sắc từ 1 đến 6
    /* Đầu tiền dùng hàm random để random số từ 0 -> 0.99 sau đó nhân cho 6 để random từ 0 -> nhỏ hơn 6
    nên để số random bắt đầu từ 1 -> 6 thì phải cộng thêm 1. Rồi dùng hàm Math.trunc() để lấy số nguyên đầu tiên
    */
    let dice = Math.trunc(Math.random() * 6 + 1);
    //Khi click vào button sẽ gỡ class hidden của element ảnh xúc xắc
    diceEl.classList.remove('hidden')
    //Dùng template string rồi gán biến ramdom vào src của element ảnh để khi nhấn vào sẽ hiện ra ảnh xúc xắc ramdom từ 1 - 6
    diceEl.src = `dice-${dice}.png`
    //Kiểm tra nếu khác 1 thì gán điểm cho người chơi hiện tại
    if(dice !== 1) {
        currentStore += dice; //Gán cộng dồn điểm vào currentStore
        current0.textContent = currentStore; //Hiển thị điểm vào element
    } else {
        //Ngược lại nếu bằng một sẽ đổi người chơi
    }

})

