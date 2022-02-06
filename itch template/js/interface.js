
var mousex;
var mousey;
var touchx;
var touchy;
var volume1;
var volume2;


//dist and ball allow for mouse smoothing as per following: https://codepen.io/nanonansen/pen/oRWmaY
//touch is currently without smoothing
var distx = 0;
var disty = 0;
var ballx = 0;
var bally = 0;

var speed = 1.;

myCanvas.addEventListener(
    "mousemove",
    event => {
    mousex = event.clientX / window.innerWidth;
    mousey = 1-event.clientY / window.innerHeight;


    distx = mousex - ballx;
    disty = mousey - bally;

    ballx = ballx + (distx * speed);
    bally = bally + (disty * speed);

    pass1.uniforms.mousex.value = ballx;
    pass2.uniforms.mousex.value = ballx;
    pass3.uniforms.mousex.value = ballx;
    pass1.uniforms.mousey.value = bally;
    pass2.uniforms.mousey.value = bally;
    pass3.uniforms.mousey.value = bally;
   
    
//mouse settings for audio control

    // if (mousex < .5){
    //     volume2 = 0;
    //     volume1 = 1;
    // }

    // else (volume2 = 1,
    //     volume1 = 0);

    // sound2.setVolume(volume2);
    // sound.setVolume(volume1);

    },
    false
);

myCanvas.addEventListener(
    "touchmove",
    event => {
    touchx = event.touches[0].clientX  / window.innerWidth;
    touchy = 1-event.touches[0].clientY  / window.innerHeight;

    
    pass1.uniforms.mousex.value = touchx;
    pass2.uniforms.mousex.value = touchx;
    pass3.uniforms.mousex.value = touchx;
    pass1.uniforms.mousey.value = touchy;
    pass2.uniforms.mousey.value = touchy;
    pass3.uniforms.mousey.value = touchy;


//touch settings for audio control

    // if (touchx > .5){
    //     volume2 = 0;
    //     volume1 = 1;
    // }

    // else (volume2 = 1,
    //     volume1 = 0);

    // sound2.setVolume(volume2);
    // sound.setVolume(volume1);

    },
    false
);