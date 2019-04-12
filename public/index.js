import Cubie from './Cubie.js'

let cubes = []
const scene = new THREE.Scene();

let camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

let renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
camera.position.z = 15


let controls = new THREE.OrbitControls( camera );

createCubes()

function animate() {
  requestAnimationFrame( animate );
  renderer.render( scene, camera );
}
animate();

function createCubes() {
  for (let x = -1; x <= 1 ; x++) {
    for (let y = -1; y <= 1 ; y++) {
      for (let z= -1; z <= 1 ; z++) {
        let pos = new THREE.Vector3( x, y, z );

        let cube = new Cubie(pos)
        scene.add(cube.draw())
        cubes.push(cube)
      }
    }
  }

  console.log(cubes)
}
