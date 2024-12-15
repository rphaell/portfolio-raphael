// deslize imagens
AOS.init({
    duration: 1200, // Animation duration
    once: true, // Whether animation should happen only once
  });


// Path to the sound file
const soundEffect = new Audio('./sounds/laser_shooting.mp3');


// Add event listeners to all buttons with the class 'sound-button'
document.querySelectorAll('.sound-button').forEach(button => {
    button.addEventListener('click', () => {
        // Play the sound effect
        soundEffect.currentTime = 0; // Reset sound to start for overlapping clicks
        soundEffect.play();
    });
});
