'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModel = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal'); //select all 3 buttons

const openModel = function () {
  modal.classList.remove('hidden');//remove hidden class and no need to use dot .hidden
  overlay.classList.remove('hidden');//remove hidden class and no need to use dot.hidden
}

const closeModel = function () {
  modal.classList.add('hidden');//add hidden class again
  overlay.classList.add('hidden');//add hidden class again
}

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModel); //attach listener for the 3 buttons clicked

btnCloseModel.addEventListener('click', closeModel); //attach listener for the close button clicked
overlay.addEventListener('click', closeModel)

document.addEventListener('keydown', function (event){ // keyup, keydown, keypress
  console.log(`a key was pressed ${event.key}`);
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) { //<div class="modal hidden">
    closeModel();
  }
});