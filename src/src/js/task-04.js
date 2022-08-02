"use strict";
const button = {
  add: document.querySelector('[data-action="increment"]'),
  sub: document.querySelector('[data-action="decrement"]'),
  span: document.getElementById('value'),
};
let counterValue = 0;

const increment = ()=>{
  counterValue +=1;
  button.span.textContent = counterValue;
};
const decrement = ()=>{
  counterValue -=1;
  button.span.textContent = counterValue;
};
button.add.addEventListener('click', increment);
button.sub.addEventListener('click', decrement);
