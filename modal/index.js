'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModel = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal'); //select all 3 buttons

console.log(btnCloseModel);

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', function () { //attach listener for the 3 buttons clicked
    console.log('Button clicked');
    modal.classList.remove('hidden');//remove hidden class and no need to use dot .hidden
    overlay.classList.remove('hidden');//remove hidden class and no need to use dot.hidden
  });

const closeModel = function () {
  modal.classList.add('hidden');//add hidden class again
  overlay.classList.add('hidden');//add hidden class again
}

btnCloseModel.addEventListener('click', closeModel); //attach listener for the close button clicked
// btnCloseModel.addEventListener('click', function () { //attach listener for the close button clicked
//   modal.classList.add('hidden');//add hidden class again
//   overlay.classList.add('hidden');//add hidden class again
// });

overlay.addEventListener('click', closeModel)
// overlay.addEventListener('click', function () {
//   modal.classList.add('hidden');//add hidden class again
//   overlay.classList.add('hidden');//add hidden class again
// });