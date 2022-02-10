
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

//sound settings
//init fade state
var fadein1 = false;
var fadein2 = false;
var fadeout1 = false;
var fadeout2 = false;

//fade times
var fadein1time = 500;
var fadeout1time = 500;
var fadein2time = 500;
var fadeout2time = 500;

//thresholds for audio fade
var inthresh = 0.3;
var outthresh = 0.9;

var inloc1 = 0.5;
var outloc1 = 0.5;
var inloc2 = 0.5;
var outloc2 = 0.5;

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

if (ballx < inloc1 && fadein1 == false && howl1.volume() <inthresh){
    fadein1 = true;
    howl1.fade(0.,1.,fadein1time);
    howl1.on('fade', function(){
        fadein1 = false;
    });
    
}

if (ballx >= outloc1 && fadeout1 == false && howl1.volume() >= outthresh){
    fadeout1 = true;
    howl1.fade(1.,0.,fadeout1time);
    howl1.on('fade', function(){
        fadeout1 = false;
    });

}

if (ballx < outloc2 && fadeout2 == false && howl2.volume() >= outthresh){
    fadeout2 = true;
    howl2.fade(1.,0.,100);
    howl2.on('fade', function(){
        fadeout2 = false;
    });
}

if (ballx >= inloc2 && fadein2 == false && howl2.volume() <= inthresh){
    fadein2 = true;
    howl2.fade(0.,1.,100);
    howl2.on('fade', function(){
        fadein2 = false;
    });
    
}

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

    //touch settings for audio control

if (touchx < inloc1 && fadein1 == false && howl1.volume() <0.3){
    fadein1 = true;
    howl1.fade(0.,1.,fadein1time);
    howl1.on('fade', function(){
        fadein1 = false;
    });
    
}

if (touchx >= outloc1 && fadeout1 == false && howl1.volume() >= 0.8){
    fadeout1 = true;
    howl1.fade(1.,0.,fadeout1time);
    howl1.on('fade', function(){
        fadeout1 = false;
    });

}

if (touchx < outloc2 && fadeout2 == false && howl2.volume() >= 0.8){
    fadeout2 = true;
    howl2.fade(1.,0.,100);
    howl2.on('fade', function(){
        fadeout2 = false;
    });
}

if (touchx >= inloc2 && fadein2 == false && howl2.volume() <= 0.3){
    fadein2 = true;
    howl2.fade(0.,1.,100);
    howl2.on('fade', function(){
        fadein2 = false;
    });
    
}

    },
    false
);