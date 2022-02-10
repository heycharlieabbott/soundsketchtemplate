var renderer = new THREE.WebGLRenderer({canvas: document.getElementById('myCanvas')});
renderer.setClearColor(0);
// debug color renderer.setClearColor(0x00ff00);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth,window.innerHeight);

//main camera and scene
var camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight,0.1, 3000);
camera.add( listener );
var scene = new THREE.Scene();

//start menu
var startcamera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight,0.1, 3000);
var startscene = new THREE.Scene();

const texture = new THREE.TextureLoader().load('js/startbutton.png');

const geometry = new THREE.PlaneGeometry( 3, 3 );
const material = new THREE.MeshBasicMaterial( {map: texture} );
const plane = new THREE.Mesh( geometry, material );
startcamera.position.z =5;
startscene.add( plane );

//start menu toggle
var start = false;
myCanvas.addEventListener('click', 
    event => { 
        start = !start;
        if(start == true && howl1.volume() <0.2 && howl2.volume() < 0.2 ){
            howl1.volume(1.);
            howl2.volume(0.);
        
        }
}, false);

function onWindowResize(){
    startcamera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
}


//composers
var composer = new THREE.EffectComposer(renderer);  

//passes
var renderPass = new THREE.RenderPass(scene, camera);
composer.addPass(renderPass);

var pass1 = new THREE.ShaderPass(THREE.CopyShader);
this.composer.addPass(pass1);

var pass2 = new THREE.AfterimagePass(THREE.AfterimageShader);
this.composer.addPass(pass2);

var pass3 = new THREE.ShaderPass(THREE.CopyShader2);
pass3.renderToScreen = true;
this.composer.addPass(pass3);


var times = 0;

pass1.uniforms.width.value = window.innerWidth;
pass1.uniforms.height.value = window.innerHeight;

pass2.uniforms.width.value = window.innerWidth;
pass2.uniforms.height.value = window.innerHeight;

pass3.uniforms.width.value = window.innerWidth;
pass3.uniforms.height.value = window.innerHeight;



//renderloop
render();
function render(){

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth,window.innerHeight);
    requestAnimationFrame(render);

    times += 0.1;

    pass1.uniforms.times.value = times;
    pass2.uniforms.times.value = times;
    pass3.uniforms.times.value = times;
    
    //start menu and scene switch
    if (start){
        composer.render();
    }

     else renderer.render(startscene,startcamera);
   
}

// function onWindowResize(){

//     // pass1.uniforms.width.value = window.innerWidth;
//     // pass1.uniforms.height.value = window.innerHeight;

//     // pass2.uniforms.width.value = window.innerWidth;
//     // pass2.uniforms.height.value = window.innerHeight;

//     // pass3.uniforms.width.value = window.innerWidth;
//     // pass3.uniforms.height.value = window.innerHeight;

// }


