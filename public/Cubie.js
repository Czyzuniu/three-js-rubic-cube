export default class Cubie {
  constructor(pos) {
    this.mesh = null;
    this.pos = pos;
  }

  draw() {
    let material = new THREE.MeshBasicMaterial( {vertexColors: THREE.FaceColors} );



    let geometry = new THREE.BoxGeometry(1,1,1);
    let cube = new THREE.Mesh( geometry, material );
    cube.position.set(this.pos.x, this.pos.y, this.pos.z)
    this.mesh = cube


    for (let i of this.mesh.geometry.faces ) {
      if (i.normal.z === 1) {
        i.color = new THREE.Color( 0xffffff );
      } else if (i.normal.z === -1) {
        i.color = new THREE.Color( 0xFFD700 );
      } else if (i.normal.y === 1) {
        i.color = new THREE.Color( 0x14E814 );
      }
      else if (i.normal.y === -1) {
        i.color = new THREE.Color( 0x1447E8 );
      }
      else if (i.normal.x === 1) {
        i.color = new THREE.Color( 0xDE0D4C );
      }
      else if (i.normal.x === -1) {
        i.color = new THREE.Color( 0xDE820D );
      }
    }


    let geo = new THREE.EdgesGeometry( this.mesh.geometry );
    let mat = new THREE.LineBasicMaterial( { color: 0x000000, linewidth: 4 } );
    let wireframe = new THREE.LineSegments( geo, mat );
    wireframe.renderOrder = 1; // make sure wireframes are rendered 2nd
    cube.add( wireframe );

    return cube

  }
}
