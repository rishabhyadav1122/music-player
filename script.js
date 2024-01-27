let now_playing = document.querySelector('.now-playing');
let track_art = document.querySelector('.track-art');
let track_name = document.querySelector('.track-name');
let track_artist = document.querySelector('.track-artist');

let playpause_btn = document.querySelector('.playpause-track');
let next_btn = document.querySelector('.next-track');
let prev_btn = document.querySelector('.prev-track');

let seek_slider = document.querySelector('.seek_slider');
let volume_slider = document.querySelector('.volume_slider');
let curr_time = document.querySelector('.current-time');
let total_duration = document.querySelector('.total-duration');
let wave = document.getElementById('wave');
let randomIcon = document.querySelector('.fa-random');
let curr_track = document.createElement('audio');

let track_index = 0;
let isPlaying = false;
let isRandom = false;
let updateTimer;

const music_list = [
    {
        img : 'images/radha.jpeg',
        name : 'Barsaane Wale Radhe',
        artist : 'Rishabh',
        music : 'music/radha.mp3'
    },
    {
        img : 'images/dulha.jpeg',
        name : 'Dulhe ka Sehra ',
        artist : 'Dhadkan',
        music : 'music/dulhe_ka_sehra.mp3'
    },
    {
        img : 'images/hua_main.jpg',
        name : 'Hua Main',
        artist : 'Animal',
        music : 'music/ANIMAL_ HUA MAIN (Lyrical Video) _ Ranbir Kapoor,Rashmika M _ Sandeep V _ Raghav,Manoj M _ Bhushan K (320 kbps).mp3'
    },
    {
        img : 'images/besharam.jpeg',
        name : 'Besharam Rang',
        artist : 'Pathan',
        music : 'music/Besharam Rang Song _ Pathaan _ Shah Rukh Khan, Deepika Padukone _ Vishal & Sheykhar _ Shilpa, Kumaar (320 kbps).mp3'
    },
    {
        img : 'images/chal.jpg',
        name : 'Chal tere Ishq me ',
        artist : 'Gadar',
        music : 'music/Chal.mp3'
    },
    {
        img : 'images/chaleya.jpg',
        name : 'Chaleya',
        artist : 'Jawan',
        music : 'music/JAWAN_ Chaleya (Hindi) _ Shah Rukh Khan _ Nayanthara _ Atlee _ Anirudh _ Arijit S, Shilpa R _ Kumaar (320 kbps).mp3'
    },
    {
        img : 'images/chamma.jpg',
        name : 'Chhamma Chhamma ',
        artist : 'Rishabh',
        music : 'music/Chamma Chamma _ (Slowed+Reverb) (320 kbps).mp3'
    },
    {
        img : 'images/dilver.jpeg',
        name : 'Dilbar',
        artist : 'Satyamev Jayate',
        music : 'music/Dilbar - (slowed+Reverb) song _ midnight chill music _ dilbar dilbar lofi song (320 kbps).mp3'
    },
    {
        img : 'images/dirty.jpg',
        name : 'Dirty Little Secret',
        artist : 'Nora Fatehi',
        music : 'music/Dirty Little Secret - Nora Fatehi x Zack Knight (EXCLUSIVE Music Video) (320 kbps).mp3'
    },
    {
        img : 'images/galat_baat.jpg',
        name : 'Galat Baat hai',
        artist : 'Mein Tera Hoon',
        music : 'music/Galat Baat Hai [ Slowed And Reverb ] Song @Lofiweb2.0 (320 kbps).mp3'
    },
    {
        img : 'images/garmi.jpg',
        name : 'Garmi',
        artist : 'Street Dancer 3D',
        music : 'music/Garmi Song _ Street Dancer 3D _ Varun D, Nora F, Shraddha K, Badshah, Neha K _ Remo D _ T-Series (320 kbps).mp3'
    },
    {
        img : 'images/hangover.jpg',
        name : 'Hangover',
        artist : 'Kick',
        music : 'music/Hangover [Slowed + Reverb] - Shreya Ghoshal - __ @mackslofi __ (320 kbps).mp3'
    },
    {
        img : 'images/Labon.jpg',
        name : 'Labon ko',
        artist : 'K.K.',
        music : 'music/Labon Ko (Slowed + Reverbed) _ KK (320 kbps).mp3'
    },
    {
        img : 'images/mercy.jpg',
        name : 'Mercy',
        artist : 'Baadshah',
        music : 'music/mercy.mp3'
    },
    {
        img : 'images/muqabla.jpg',
        name : 'Muqabla',
        artist : 'Street Dancer 3D',
        music : 'music/Full Song_ Muqabla _ Street Dancer 3D _A.R. Rahman, Prabhudeva, Varun D, Shraddha K, Tanishk B (320 kbps) - Copy.mp3'
    },
    {
        img : 'images/naja.jpg',
        name : 'Naja',
        artist : 'Sooryavanshi',
        music : 'music/na ja ( slowed + reverb ) (320 kbps).mp3'
    },
    {
        img : 'images/nashe_si.jpg',
        name : 'Nashe si chad gyi',
        artist : 'Befikre',
        music : 'music/Nashe Si Chadh Gayi _ Full Song _ Befikre, Ranveer Singh, Vaani Kapoor, Arijit Singh, Vishal-Shekhar (320 kbps).mp3.crdownload'
    },
    {
        img : 'images/paan.jpg',
        name : 'Paan dukaniya',
        artist : 'Bhola',
        music : 'music/Paan Dukaniya(Full Video) Bholaa _ Ajay Devgn,Tabu,Raai Laxmi _ Kanika K,Swaroop K, Irshad K, Ravi B (320 kbps).mp3'
    },
    {
        img : 'images/pathan.jpg',
        name : 'Jhoome jo pathan',
        artist : 'Pathan',
        music : 'music/Jhoome Jo Pathaan Song _ Shah Rukh Khan, Deepika _ Vishal & Sheykhar, Arijit Singh, Sukriti, Kumaar (320 kbps).mp3'
    },
    {
        img : 'images/player.jpg',
        name : 'Players',
        artist : 'Baadshah',
        music : 'music/players.mp3'
    },
    
    {
        img : 'images/saki.jpg',
        name : 'Saki Saki',
        artist : 'Batla House',
        music : 'music/O SAKI SAKI - Nora fatehi ( Slowed  X Reverb ) (320 kbps).mp3'
    },
    {
        img : 'images/Shamat.jpg',
        name : 'Shaamat',
        artist : 'Ek Villain Returns',
        music : 'music/Shaamat - Lofi (Slowed + Reverb) _ Ankit Tiwari, Tara Sutaria _ SR Lofi (320 kbps).mp3'
    },
    {
        img : 'images/tere_pyaar.jpg',
        name : 'Tere Pyaar Me',
        artist : 'Tu jhuthi Me makkar',
        music : 'music/Tere Pyaar Mein (Full Video) Tu Jhoothi Main Makkaar_ Ranbir,Shraddha_ Pritam_Arijit,Nikhita,Amitabh (320 kbps).mp3'
    },
    {
        img : 'images/tumhi.jpeg',
        name : 'Tum Hi aana',
        artist : 'Marjaavan',
        music : 'music/Tum Hi Aana Full Video _ Marjaavaan _ Riteish D, Sidharth M, Tara S _ Jubin N _ Payal Dev Kunaal V (320 kbps) (1).mp3'
    },
    {
        img : 'images/weapon.jpg',
        name : 'Illegal Weapon',
        artist : 'Street Dancer 3D',
        music : 'music/Full Video _Illegal Weapon 2.0_Street Dancer 3D _Varun D,Shraddha K,Nora_Tanishk B,Jasmine S,Garry S (320 kbps).mp3'
    },
    {
        img : 'images/zaroori.jpg',
        name : 'Zaroori tha',
        artist : 'Rahat Fateh Ali khan',
        music : 'music/Rahat Fateh Ali Khan - Zaroori Tha (320 kbps).mp3'
    },
    {
        img : 'images/lahore.jpg',
        name : 'Lahore',
        artist : 'Guru Randhawa',
        music : 'music/Guru Randhawa_ Lahore Video Song  (Lyrics) _  Bhushan Kumar _ Vee _ DirectorGifty _ T-Series (320 kbps).mp3'
    },
    {
        img : 'images/high.webp',
        name : 'Highrated Gabru',
        artist : 'Guru Randhawa',
        music : 'music/Guru Randhawa_ High Rated Gabru Official Song _ DirectorGifty _ Bhushan Kumar _ T-Series (320 kbps).mp3'
    },
    {
        img : 'images/dance.jpeg',
        name : 'Dance Meri Rani',
        artist : 'Guru Randhawa',
        music : 'music/DANCE MERI RANI_ Guru Randhawa Ft Nora Fatehi _ Tanishk, Zahrah _ Rashmi Virag, Bosco _ Bhushan K (320 kbps).mp3'
    },
    {
        img : 'images/woh.jpeg',
        name : 'Woh',
        artist : 'Ikka-Dino James',
        music : 'music/woh.mp3'
    },
    
];

loadTrack(track_index);

function loadTrack(track_index){
    clearInterval(updateTimer);
    reset();

    curr_track.src = music_list[track_index].music;
    curr_track.load();

    track_art.style.backgroundImage = "url(" + music_list[track_index].img + ")";
    track_name.textContent = music_list[track_index].name;
    track_artist.textContent = music_list[track_index].artist;
    now_playing.textContent = "Playing music " + (track_index + 1) + " of " + music_list.length;

    updateTimer = setInterval(setUpdate, 1000);

    curr_track.addEventListener('ended', nextTrack);
    random_bg_color();
}

function random_bg_color(){
    let hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e'];
    let a;

    function populate(a){
        for(let i=0; i<6; i++){
            let x = Math.round(Math.random() * 14);
            let y = hex[x];
            a += y;
        }
        return a;
    }
    let Color1 = populate('#');
    let Color2 = populate('#');
    var angle = 'to right';

    let gradient = 'linear-gradient(' + angle + ',' + Color1 + ', ' + Color2 + ")";
    document.body.style.background = gradient;
}
function reset(){
    curr_time.textContent = "00:00";
    total_duration.textContent = "00:00";
    seek_slider.value = 0;
}
function randomTrack(){
    isRandom ? pauseRandom() : playRandom();
}
function playRandom(){
    isRandom = true;
    randomIcon.classList.add('randomActive');
}
function pauseRandom(){
    isRandom = false;
    randomIcon.classList.remove('randomActive');
}
function repeatTrack(){
    let current_index = track_index;
    loadTrack(current_index);
    playTrack();
}
function playpauseTrack(){
    isPlaying ? pauseTrack() : playTrack();
}
function playTrack(){
    curr_track.play();
    isPlaying = true;
    track_art.classList.add('rotate');
    wave.classList.add('loader');
    playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}
function pauseTrack(){
    curr_track.pause();
    isPlaying = false;
    track_art.classList.remove('rotate');
    wave.classList.remove('loader');
    playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
}
function nextTrack(){
    if(track_index < music_list.length - 1 && isRandom === false){
        track_index += 1;
    }else if(track_index < music_list.length - 1 && isRandom === true){
        let random_index = Number.parseInt(Math.random() * music_list.length);
        track_index = random_index;
    }else{
        track_index = 0;
    }
    loadTrack(track_index);
    playTrack();
}
function prevTrack(){
    if(track_index > 0){
        track_index -= 1;
    }else{
        track_index = music_list.length -1;
    }
    loadTrack(track_index);
    playTrack();
}
function seekTo(){
    let seekto = curr_track.duration * (seek_slider.value / 100);
    curr_track.currentTime = seekto;
}
function setVolume(){
    curr_track.volume = volume_slider.value / 100;
}
function setUpdate(){
    let seekPosition = 0;
    if(!isNaN(curr_track.duration)){
        seekPosition = curr_track.currentTime * (100 / curr_track.duration);
        seek_slider.value = seekPosition;

        let currentMinutes = Math.floor(curr_track.currentTime / 60);
        let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
        let durationMinutes = Math.floor(curr_track.duration / 60);
        let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

        if(currentSeconds < 10) {currentSeconds = "0" + currentSeconds; }
        if(durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
        if(currentMinutes < 10) {currentMinutes = "0" + currentMinutes; }
        if(durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

        curr_time.textContent = currentMinutes + ":" + currentSeconds;
        total_duration.textContent = durationMinutes + ":" + durationSeconds;
    }
}
