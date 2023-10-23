import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');

const player = new Player(iframe);

const onPlay = function (data) {
    const currentSeconds = data.seconds;
    console.log(currentSeconds);
    const currentTime = 'current_time';
    localStorage.setItem(currentTime, JSON.stringify(currentSeconds));
};

function getCurrentTimeFromLocalStorage() {
    const currentTime = localStorage.getItem('current_time')

    if (currentTime) {
        const timeOfPlayback = JSON.parse(currentTime);

        player.setCurrentTime(timeOfPlayback).then(function (seconds) {
            console.log("поточний час");
        }).catch(function (error) {
            switch (error.name) {
                case 'RangeError':
                    console.log("час менше 0 або більше тривалості відео")
                    break;

                default:
                    console.log("інша помилка")
                    break;
            }
        });

    }
};


player.on('play', onPlay);


