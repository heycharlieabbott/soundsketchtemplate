// create an AudioListener and add it to the camera
const listener = new THREE.AudioListener();

var howl1 = new Howl({
    src: ['js/audio1.mp3'],
    html5: true,
    loop: true,
  });

var howl2 = new Howl({
    src: ['js/audio2.mp3'],
    html5: true,
    loop: true,
  });

myCanvas.addEventListener('click', function() {

    if (howl1.playing() == true || howl2.playing() == true ){
        howl1.pause();
        howl2.pause();
    }

    else {
        howl1.play();
        howl2.play();
    }
    

}, false);