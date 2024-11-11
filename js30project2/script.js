/* Tamla Miller */

window.addEventListener('keydown', playSound);

function playSound(e) {
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
	
	if (!audio || !key) return;
	audio.currentTime = 0;
	audio.play();
	key.remove();
		
}

window.addEventListener('keydown', playSound);
