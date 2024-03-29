const content = document.querySelector('.content-container');
const btns = document.querySelectorAll('.btn');

window.addEventListener('DOMContentLoaded', () => {
  displayMenuItems(menu);
});

btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const category = e.currentTarget.dataset.id;
    const menuCategory = menu.filter((menuItem) => {
      if (menuItem.category === category) {
        return menuItem;
      }
    });
    if (category === 'all') {
      displayMenuItems(menu);
    } else {
      displayMenuItems(menuCategory);
    }
  });
});

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map((item) => {
    return `
          <article class="menu-item">
            <a href=${item.href}>
              <img
                src="${item.img}"
                class="photo"
                alt="${item.title}"
              />
            </a>
            <div class="menu-info">
              <header>
                <span class="menuName">${item.title}</span>
                <hr />
              </header>
              <p class="menu-text">
                ${item.desc}
              </p>
            </div>
          </article>`;
  });
  displayMenu = displayMenu.join('');
  content.innerHTML = displayMenu;
}

// let menu = [
//   {
//     id: 1,
//     title: '야구볼 게임',
//     category: 'game',
//     href: './game/baseball.html',
//     img: './img/baseball.jpg',
//     desc: `3개의 숫자를 맞추는 게임!`,
//   },
//   {
//     id: 2,
//     title: '로또 추첨',
//     category: 'function',
//     href: './functio/lotte.html',
//     img: './img/lotte.jpg',
//     desc: `매주 토요일 저녁엔 내가 부자가 될지도?!`,
//   },
//   {
//     id: 3,
//     title: '카운터 체크',
//     category: 'function',
//     href: './functio/count_check.html',
//     img: './img/count_check.jpg',
//     desc: `편하게 숫자를 세보세요!`,
//   },
//   {
//     id: 4,
//     title: '버튼을 누르자!',
//     category: 'game',
//     href: './game/catch_me.html',
//     img: './img/catch_me.jpg',
//     desc: `15초 동안 많은 버튼을 누르는 간단한 게임!`,
//   },
//   {
//     id: 5,
//     title: '가위바위보',
//     category: 'game',
//     href: './game/scissors_rock_paper.html',
//     img: './img/scissors_rock_paper.jpg',
//     desc: `가장 간단한 가위 바위 보! 상대는 컴퓨터!!`,
//   },
//   {
//     id: 6,
//     title: '스톱워치',
//     category: 'function',
//     href: './functio/stopwatch.html',
//     img: './img/stopwatch.jpg',
//     desc: `편리한 시계 체크! 스톱워치와 함께~`,
//   },
//   {
//     id: 7,
//     title: '다섯고개',
//     category: 'game',
//     href: './game/five.html',
//     img: './img/five.jpg',
//     desc: `5번의 힌트만 보고 답을 맞춰야한다!`,
//   },
//   {
//     id: 8,
//     title: '랜덤박스',
//     category: 'function',
//     href: './functio/random_box.html',
//     img: './img/random_box.jpg',
//     desc: `6개의 박스 중 당첨은 하나!!`,
//   },
// ];

let menu = [
  {
    id: 1,
    title: '야구볼 게임',
    category: 'game',
    href: './game/baseball.html',
    img: 'https://github.com/codurfer/game_func/blob/master/img/baseball.JPG?raw=true',
    desc: `3개의 숫자를 맞추는 게임!`,
  },
  {
    id: 2,
    title: '로또 추첨',
    category: 'function',
    href: './functio/lotte.html',
    img: 'https://github.com/codurfer/game_func/blob/master/img/lotte.JPG?raw=true',
    desc: `매주 토요일 저녁엔 내가 부자가 될지도?!`,
  },
  {
    id: 3,
    title: '카운터 체크',
    category: 'function',
    href: './functio/count_check.html',
    img: 'https://github.com/codurfer/game_func/blob/master/img/count_check.JPG?raw=true',
    desc: `편하게 숫자를 세보세요!`,
  },
  {
    id: 4,
    title: '버튼을 누르자!',
    category: 'game',
    href: './game/catch_me.html',
    img: 'https://github.com/codurfer/game_func/blob/master/img/catch_me.JPG?raw=true',
    desc: `15초 동안 많은 버튼을 누르는 간단한 게임!`,
  },
  {
    id: 5,
    title: '가위바위보',
    category: 'game',
    href: './game/scissors_rock_paper.html',
    img: 'https://github.com/codurfer/game_func/blob/master/img/scissors_rock_paper.JPG?raw=true',
    desc: `가장 간단한 가위 바위 보! 상대는 컴퓨터!!`,
  },
  {
    id: 6,
    title: '스톱워치',
    category: 'function',
    href: './functio/stopwatch.html',
    img: 'https://github.com/codurfer/game_func/blob/master/img/stopwatch.JPG?raw=true',
    desc: `편리한 시계 체크! 스톱워치와 함께~`,
  },
  {
    id: 7,
    title: '다섯고개',
    category: 'game',
    href: './game/five.html',
    img: 'https://github.com/codurfer/game_func/blob/master/img/five.JPG?raw=true',
    desc: `5번의 힌트만 보고 답을 맞춰야한다!`,
  },
  {
    id: 8,
    title: '랜덤박스',
    category: 'function',
    href: './functio/random_box.html',
    img: 'https://github.com/codurfer/game_func/blob/master/img/random_box.JPG?raw=true',
    desc: `6개의 박스 중 당첨은 하나!!`,
  },
  {
    id: 9,
    title: '타입스톱',
    category: 'game',
    href: './game/timestop.html',
    img: 'https://github.com/codurfer/game_func/blob/master/img/timestop.JPG?raw=true',
    desc: `10초 혹은 20초에 멈추세요!!`,
  },
  {
    id: 10,
    title: 'BMI 계산기',
    category: 'function',
    href: './functio/bmi_cal.html',
    img: 'https://github.com/codurfer/game_func/blob/master/img/bmi_cal.JPG?raw=true',
    desc: `나의 신체질량지수는 몇일까??!`,
  },
  {
    id: 11,
    title: 'UP & DOWN',
    category: 'game',
    href: './game/up_down.html',
    img: 'https://github.com/codurfer/game_func/blob/master/img/up_down.JPG?raw=true',
    desc: `나의 신체질량지수는 몇일까??!`,
  },
];
