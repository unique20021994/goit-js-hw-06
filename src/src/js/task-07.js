'use strict';

let input = document.getElementById('font-size-control');
let text = document.getElementById('text');

input.oninput = function() {
  text.style.fontSize = input.value + 'px';
}