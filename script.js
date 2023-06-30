const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;
let int = setInterval(blurring, 30);
function blurring() {
  load++;
  if (load > 99) {
    clearInterval(int); //Stopping the interval from calling the function if value is 100
  }
  loadText.innerText = `${load}%`;
  loadText.style.opacity = scale(load, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

/* The function scale maps a numbers set range to another numbers set range. 
so if set range 1 is (0-100) and set range 2 (0-20). When set 1 value is 50 this corresponds with 10 in set 2 */
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
