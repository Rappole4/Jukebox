	
function Library(musiclist){
	var musiclistOpt = [];
	this.addMusic = function(musics){
		musiclistOpt.push(musics);
	}
	this.listMusic = function() {
		return musiclistOpt.toString();
	}
	this.musicList=musiclistOpt[musiclist];
}

	var Playlist = new Library();
	var Eye = new Library();
	var Fight = new Library();
	Eye.addMusic("Eye of the Tiger");
	Fight.addMusic("This is My Fight Song");
	Playlist.addMusic("audio/eye-of-tiger.mp3");
	Playlist.addMusic("audio/fight-song.mp3");

	var allMusic, tiger, fight;

document.addEventListener("DOMContentLoaded",function(){
	var plays = document.getElementById("play");
	var stops = document.getElementById("stop");
	var next = document.getElementById("next");
	var music = document.getElementById("music");
	allMusic = document.getElementById("allMusics");
	tiger = document.getElementById("tiger");
	fight = document.getElementById("fight");

plays.onclick = function() {
	music.play();
}
stops.onclick = function() {
	music.pause();
}
next.onclick = function() {
		if (/fight-song\.mp3$/.test(music.src)||music.src==""){
			return music.src="audio/eye-of-tiger.mp3"
		} else if ( /eye-of-tiger\.mp3$/.test(music.src) ){
				return music.src="audio/fight-song.mp3"
		}
}
allMusic.onclick = function() {
	tiger.innerText = Eye.listMusic();
	fight.innerText = Fight.listMusic();
}

});
