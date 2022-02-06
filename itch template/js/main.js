var renderer = new THREE.WebGLRenderer({canvas: document.getElementById('myCanvas')});
renderer.setClearColor(0x00ff00);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth,window.innerHeight);

var camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight,0.1, 3000);
var scene = new THREE.Scene();

var bufcamera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight,0.1, 3000);
var bufscene = new THREE.Scene();


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
    
   
    composer.render();
    
}

// function onWindowResize(){

//     // pass1.uniforms.width.value = window.innerWidth;
//     // pass1.uniforms.height.value = window.innerHeight;

//     // pass2.uniforms.width.value = window.innerWidth;
//     // pass2.uniforms.height.value = window.innerHeight;

//     // pass3.uniforms.width.value = window.innerWidth;
//     // pass3.uniforms.height.value = window.innerHeight;

// }


