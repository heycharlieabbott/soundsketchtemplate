( function () {

	/**
 * Afterimage shader
 * tNew is the updated frame, for passthrough use this
 * tOld is the prior frame, which when added to tNew causes feedback
 */
	const AfterimageShader = {
		uniforms: {
			'tOld': {
				value: null
			},
			'tNew': {
				value: null
			},
			'times':{
				value: 1.0
			},
			'mousex': {
				value: 1.0
			},
			'mousey': {
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

		uniform sampler2D tOld;
		uniform sampler2D tNew;

		uniform float times;
		uniform float mousex;
		uniform float mousey;

		varying vec2 vUv;


		void main() {

			//texelOld is from CopyShader, texelNew is the writebuffer
			vec4 texelOld = texture2D( tOld, vUv );
			vec4 texelNew = texture2D( tNew, vUv );

			float time = times;

			vec2 uv = vUv;
			uv -= 0.5;		

			vec3 col = texelNew.xyz;

			
			gl_FragColor = vec4(col,1.);

		}`
	};

	THREE.AfterimageShader = AfterimageShader;

} )();
