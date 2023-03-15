const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

//const onPlay = function (data) {
// data is an object containing properties specific to that event
//};

player.on('timeupdate', function () {
  console.log('played the video!');
  player.getCurrentTime().then(function (seconds) {
    console.log(seconds);
  });
});

//player.on('event', throttle(function, number);

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

//const callback = function () {
//  console.log('stopped');
//};

player.off('play');
