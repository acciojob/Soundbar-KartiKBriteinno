//your JS code here. If required.
document.addEventListener("DOMContentLoaded", () => {
    const sounds = ['sound1', 'sound2', 'sound3', 'sound4', 'sound5']; // List of sound file names (without extension)
    const buttonsContainer = document.getElementById('buttons');
    
    sounds.forEach(sound => {
        const button = document.createElement('button');
        button.className = 'btn';
        button.innerText = sound;
        button.addEventListener('click', () => playSound(sound));
        buttonsContainer.appendChild(button);
    });

    const stopButton = document.querySelector('.stop');
    stopButton.addEventListener('click', stopSound);

    let currentAudio = null;

    function playSound(sound) {
        if (currentAudio) {
            currentAudio.pause();
        }
        currentAudio = new Audio(`sounds/${sound}.mp3`);
        currentAudio.play();
    }

    function stopSound() {
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }
    }
});