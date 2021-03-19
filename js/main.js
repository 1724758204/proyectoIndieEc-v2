const Audio=document.getElementById("audio");
const playPause=document.getElementById("play");
playPause.addEventListener("click",()=>{
    if(Audio.paused|| Audio.ended){
        playPause.querySelector(".pause-btn").classList.toggle("hide");
        playPause.querySelector(".play-btn").classList.toggle("hide");
        Audio.play();
    }else{Audio.pause();
    playPause.querySelector(".pause-btn").classList.toggle("hide");
    playPause.querySelector(".play-btn").classList.toggle("hide");

}
});