'use strict';
const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const showModal = document.querySelectorAll('.show-modal');
const closeModal = document.querySelector('.close-modal')
for(let i = 0; i < showModal.length; i++) {
    showModal[i].addEventListener('click', function (){
        modal.classList.remove('hidden')
        overlay.classList.remove('hidden')
    })
}
function addClass() {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}
closeModal.addEventListener('click', function (){
    addClass()
})
overlay.addEventListener('click',function (){
    addClass()
})
document.addEventListener('keydown', function (e){
    if(e.key === 'Escape' && !modal.classList.contains('.hidden')) {
        addClass();
    }
})