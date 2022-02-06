( function () {

	/**
 * Full-screen textured quad shader
 */
	var CopyShader2 = {
		uniforms: {
			'tDiffuse': {
				value: null
			},
			'times':{
				value: 1.0
			},
			'mousex':{
				value: 1.0
			},
            'mousey':{
				value: 1.0
			},
			'width':{
				value: 1.0
			},
            'height':{
				value: 1.0
			}
		},
		vertexShader:
  /* glsl */
  `

		varying vec2 vUv;
		

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,
		fragmentShader:
  /* glsl */
  `
        varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform float times;

		uniform float mousex;
        uniform float mousey;
		uniform float width;
		uniform float height;


		void main() {
			float time = times;
			vec2 uv = vUv;

            //feed from AfterimageShader
            vec4 texel = texture2D( tDiffuse, uv);
			vec3 col = texel.xyz;



			gl_FragColor = vec4(col,1.);

		}`
	};

	THREE.CopyShader2 = CopyShader2;

} )();
