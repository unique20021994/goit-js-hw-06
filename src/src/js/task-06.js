'use strict';

let inputVal = document.getElementById('validation-input');
let inputLengthString = inputVal.getAttribute('data-length');
let inputLengthNumber = parseInt(inputLengthString, 10);

inputVal.oninput = function () {
  
  if (inputLengthNumber === inputVal.value.length) {
    inputVal.classList.add('valid');
    inputVal.classList.remove('invalid');
  }

  if (inputVal.value.length === 0) {
    inputVal.classList.remove('valid');
    inputVal.classList.remove('invalid');
  }

  if (
    inputLengthNumber !== inputVal.value.length &&
    inputVal.value.length !== 0
  ) {
    inputVal.classList.add('invalid');
  }
};
