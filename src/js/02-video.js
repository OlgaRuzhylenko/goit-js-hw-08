import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');

const player = new Player(iframe);

const onPlay = function (data) {
    const currentSeconds = data.seconds;
    console.log(currentSeconds);
    const currentTime = "videoplayer-current-time";
    localStorage.setItem(currentTime, JSON.stringify(currentSeconds));
};

function getCurrentTimeFromLocalStorage() {
    const currentTime = localStorage.getItem("videoplayer-current-time")

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

getCurrentTimeFromLocalStorage()
player.on('play', onPlay);


