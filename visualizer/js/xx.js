var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(10, $(window).width() / $(window).height(), 1, 1000);
var renderer = new THREE.WebGLRenderer();
var cubes = new Array();
var controls;

document.body.appendChild(renderer.domElement);

var i = 0;
for(var x = 0; x < 40; x += 2) {
	var j = 0;
	cubes[i] = new Array();
	for(var z = 0; z < 40; z += 2) {
		var geometry = new THREE.CubeGeometry(1.5, 1.5, 1.5);
		
		var material = new THREE.MeshBasicMaterial({color:0xffffff, wireframe:true
			// color: 0xffffff,
			// ambient: 0x808080,
			// specular: 0xffffff,
			// shininess: 20,
			// reflectivity: 5.5 
		});
	
		cubes[i][j] = new THREE.Mesh(geometry, material);
		cubes[i][j].position = new THREE.Vector3(x, 0, z);
		// scene.add(cubes[i][j]);
		
		j++;
	}
	i++;
}

scene.add(cubes[10][5]);
scene.add(cubes[9][5]);
scene.add(cubes[8][5]);
scene.add(cubes[7][5]);
scene.add(cubes[6][5]);
scene.add(cubes[5][5]);
scene.add(cubes[4][5]);
scene.add(cubes[3][5]);
scene.add(cubes[2][5]);
scene.add(cubes[1][5]);
scene.add(cubes[0][5]);

scene.add(cubes[5][0]);
scene.add(cubes[5][1]);
scene.add(cubes[5][2]);
scene.add(cubes[5][3]);
scene.add(cubes[5][4]);
scene.add(cubes[5][5]);
scene.add(cubes[5][6]);
scene.add(cubes[5][7]);
scene.add(cubes[5][8]);
scene.add(cubes[5][9]);
scene.add(cubes[5][10]);

// var geometry = new THREE.CylinderGeometry( 0, 20, 20, 4, 1 );
// var material =  new THREE.MeshBasicMaterial( { color:0xeeeeee, wireframe: true} );
// var mesh = new THREE.Mesh( geometry, material );
// mesh.position.x = 0;
// mesh.position.y = 0;
// mesh.position.z = 0;
// mesh.updateMatrix();
// mesh.matrixAutoUpdate = false;

// scene.add (mesh);

// var plane = new THREE.Mesh( new THREE.PlaneGeometry( 28, 28, 10, 15 ), new THREE.MeshBasicMaterial( { color: 0xffffff, wireframe: true } ) );
// plane.rotation.x = - Math.PI / 2;
// plane.position.x=10;
// plane.position.z=10;
// scene.add( plane );

camera.position.z = 70;


controls = new THREE.OrbitControls(camera);
controls.addEventListener('change', render);

for(var i = 0; i < 7; i++) {
	controls.pan(new THREE.Vector3( 0, 1, 0 ));
	controls.pan(new THREE.Vector3( 0, 0, 1 ));
}

var render = function () {

	if(typeof array === 'object' && array.length > 0) {
		var k = 0;
		for(var i = 0; i < cubes.length; i++) {
			for(var j = 0; j < cubes[i].length; j++) {
				var scale = (array[k] + boost) / 30;
				cubes[i][j].scale.y = (scale < 1 ? 1 : scale);
				k += (k < array.length ? 1 : 0);
			}
		}
	}
	requestAnimationFrame(render);
	controls.update();
	renderer.render(scene, camera);
};

render();
renderer.setSize($(window).width(), $(window).height());

function randomColor() {
	var min = 64;
	var max = 224;
	var r = (Math.floor(Math.random() * (max - min + 1)) + min) * 65536;
	var g = (Math.floor(Math.random() * (max - min + 1)) + min) * 256;
	var b = (Math.floor(Math.random() * (max - min + 1)) + min);
	return r + g + b;
}
