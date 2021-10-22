

let song_list = [
    "assets/music/song_1.mp3",
    "assets/music/song_2.mp3",
    "assets/music/song_3.mp3",
    "assets/music/song_4.mp3"
] 

let song_0 = [
    "Danisogen",
    "Mirror Lake",
    2,
    50
]

let song_1 = [
    "dontcry",
    "Jiro Dreams",
    1,
    46
]
let song_2 = [
    "Contrasts",
    "Softy x Kaspa",
    2,
    51
]
let song_3 = [
    "Wys",
    "Snowman",
    3,
    15
]

let actual_song = 0;
let is_playing = false;
let is_looping = false;
let is_random = false;


const button_play = document.querySelector('.audio-control-play');
const button_next = document.querySelector('.audio-control-next');
const button_previous = document.querySelector('.audio-control-previous');
const button_loop = document.querySelector('.audio-control-loop');
const button_random = document.querySelector('.audio-control-random');

let audio = new Audio(song_list[actual_song]);
audio.volume = 0.5;





// FOOTER
// Play the song
button_play.addEventListener('click', event => {
    if (is_playing == false){
        audio.play();
        is_playing = true;
        button_play.innerHTML = "pause";
        console.log("play");


    } else {
        audio.pause();
        is_playing = false;
        button_play.innerHTML = "play_arrow";
        console.log("pause")
    }
  });


// Next sound  
button_next.addEventListener('click', event => {
    if (is_random == true){
        actual_song = getRandomInt(4);
        audio.pause();
        audio = new Audio(song_list[actual_song]);
        audio.play();
        console.log("random");
    } else {
    if (actual_song < song_list.length - 1){
        actual_song++;
        audio.pause();
        audio = new Audio(song_list[actual_song]);
        audio.play();
        console.log("next");

    } else {
        actual_song = 0;
        audio.pause();
        audio = new Audio(song_list[actual_song]);
        audio.play();
        console.log("next");
    }
}
});

// Previous sound
button_previous.addEventListener('click', event => {
    if (is_random == true){
        actual_song = getRandomInt(4);
        audio.pause();
        audio = new Audio(song_list[actual_song]);
        audio.play();
        console.log("random");
        console.log(actual_song)

    } else {
    if (actual_song > 0){
        actual_song--;
        audio.pause();
        audio = new Audio(song_list[actual_song]);
        audio.play();
        console.log("previous");
        console.log(actual_song)


    } else {
        actual_song = song_list.length - 1;
        audio.pause();
        audio = new Audio(song_list[actual_song]);
        audio.play();
        console.log("previous");
        console.log(actual_song)

    }
}
});



// Play the song
button_random.addEventListener('click', event => {
    if (is_random == false){
        is_random = true;
        button_random.classList.add("active");
    } else {
        is_random = false;
        button_random.classList.remove("active");
    }
  });

button_loop.addEventListener('click', event => {
    if (is_looping == false){
        is_looping = true;
        button_loop.classList.add("active");
    } else {
        is_looping = false;
        button_loop.classList.remove("active");
        
    }
  });

  

// When finished
audio.addEventListener("ended", function(){
    console.log("ended, go next");
    if (is_looping == true){
        audio.play();
        console.log("looping")
    }
    if (is_random == true){
        actual_song = getRandomInt(4);
        audio.pause();
        audio = new Audio(song_list[actual_song]);
        audio.play();
        console.log("random");
        
    }
});


console.log(actual_song)
// Chiffre au pif
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }


