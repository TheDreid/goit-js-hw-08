// import Player from '@vimeo/player';
// import throttle from 'lodash.throttle';

// const THROTTLE_DELAY = 1000;

// const player = new Player('vimeo-player');

// player.on(
//   'timeupdate',
//   throttle(() => {
//     const currentTime = player.getCurrentTime();
//     console.log(currentTime);

//     localStorage.setItem(
//       'videoplayer-current-time',
//       JSON.stringify(currentTime)
//     );
//   }, THROTTLE_DELAY)
// );

// const savedTime = JSON.parse(localStorage.getItem('videoplayer-current-time'));
// console.log(savedTime);
// if (savedTime) {
//   player.setCurrentTime(savedTime);
// }

// import Player from '@vimeo/player';
// import throttle from 'lodash.throttle';

// const THROTTLE_DELAY = 1000;

// const player = new Player('vimeo-player');

// player.on(
//   'timeupdate',
//   throttle(() => {
//     const currentTime = player.getCurrentTime();

//     console.log(currentTime.seconds);
//     localStorage.setItem(
//       'videoplayer-current-time',
//       JSON.stringify(currentTime)
//     );
//   }, THROTTLE_DELAY)
// );

// const savedTimeJSON = localStorage.getItem('videoplayer-current-time');
// const savedTime = savedTimeJSON ? JSON.parse(savedTimeJSON) : null;

// console.log(savedTime);

// if (savedTime) {
//   player.setCurrentTime(savedTime);
// }

// vimeoPlayer.on('timeupdate', () => {
//   const currentTime = vimeoPlayer.getCurrentTime();

//   localStorage.setItem('videoplayer-current-time', JSON.stringify(currentTime));
// });

import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const playerElement = document.getElementById('vimeo-player');
const player = new Player(playerElement);

// Відстеження події timeupdate
player.on(
  'timeupdate',
  throttle(data => {
    localStorage.setItem(
      'videoplayer-current-time',
      JSON.stringify(data.seconds)
    );
  }, 1000)
);

// Встановлення початкового значення часу відтворення
const savedTime = JSON.parse(localStorage.getItem('videoplayer-current-time'));
if (savedTime) {
  player.setCurrentTime(savedTime);
}
