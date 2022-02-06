// create an AudioListener and add it to the camera
const listener = new THREE.AudioListener();
camera.add( listener );

// create a global audio source
const sound = new THREE.Audio( listener );
const sound2 = new THREE.Audio( listener );

// load a sound and set it as the Audio object's buffer
const audioLoader = new THREE.AudioLoader();
audioLoader.load( 'js/audio1.mp3', function( buffer ) {
    sound.setBuffer( buffer );
    sound.setLoop( true );
    sound.setVolume( 1.0 );
    sound.play();
});


const audioLoader2 = new THREE.AudioLoader();
audioLoader2.load( 'js/audio2.mp3', function( buffer ) {
    sound2.setBuffer( buffer );
    sound2.setLoop( true );
    sound2.setVolume( 0.0 );
    sound2.play();
});

