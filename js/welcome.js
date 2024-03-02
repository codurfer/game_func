const welcomeWord = '환영합니다. 좋은 시간 보내세요!';
const welcome = document.querySelector('.welcome');
let i = 0;
let j = 0;
let textWord = [];
let show;
textWord = welcomeWord.split('');

function startWel() {
  welcome.innerText = '';
  show = setInterval(typing, 200);
}

function typing() {
  if (i < welcomeWord.length) {
    welcome.innerHTML += textWord[i];
    i++;
  } else if (i === welcomeWord.length) {
    j = i;
    i = welcomeWord.length + 1;
  } else if (-1 < j) {
    welcome.innerHTML = welcome.innerHTML.slice(0, j);
    j--;
  } else {
    clearInterval(show);
  }
}

startWel();
