import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const throttle = require('lodash.throttle');

player.getVideoTitle().then(function (title) {
  // console.log('title:', title);
});

player.on(
  'timeupdate',
  throttle(() => {
    //   console.log('played the video!');
    player
      .getCurrentTime()
      .then(function (seconds) {
        //       console.log(seconds);
        localStorage.setItem(
          'videoplayer-current-time',
          JSON.stringify(seconds)
        );
      })
      .catch(function (error) {
        console.error(error.name);
      });
  }, 1000)
);

player.setCurrentTime(
  JSON.parse(localStorage.getItem('videoplayer-current-time')) || 1
);
