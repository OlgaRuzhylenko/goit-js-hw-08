import Player from '@vimeo/player'

const iframe = document.querySelector('iframe');

const player = new Player(iframe);

const onPlay = function(data) {
    // data is an object containing properties specific to that event
};

player.on('timeupdate', onPlay);
