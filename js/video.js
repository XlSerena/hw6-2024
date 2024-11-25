var video;

window.addEventListener("load", function()  {
    console.log("Good job opening the window");
    video = document.querySelector("#player1");
    if (video) {
        video.autoplay = false;
        video.loop = false;
        console.log("Auto play and looping disabled");
    }
});

document.querySelector("#play").addEventListener("click", function() {
    video.play();
    document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
    console.log("Video playing");
});

document.querySelector("#pause").addEventListener("click", function() {
    video.pause();
    console.log("Video paused");
});

document.querySelector("#slower").addEventListener("click", function(){
    video.playbackRate *= 0.9;
    console.log("New speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
    video.playbackRate /= 0.9;
    console.log("New speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
    if (video.currentTime + 10 < video.duration){
		video.currentTime += 10;
	}
	else{
		video.currentTime = 0;
	}
	console.log("Current time is", video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
    if (video.muted) {
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
	} else {
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
	}
});

document.querySelector("#slider").addEventListener("input", function() {
    video.volume = this.value / 100;
    document.querySelector("#volume").innerHTML = document.querySelector("#slider").value + "%";
	console.log("Volume is", video.volume);
});

document.querySelector("#vintage").addEventListener("click", function() {
    video.classList.add("oldSchool");
    console.log("Old School Applied");
});

document.querySelector("#orig").addEventListener("click", function() {
    video.classList.remove("oldSchool");
    console.log("Original style applied");
});

