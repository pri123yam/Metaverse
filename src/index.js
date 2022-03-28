// const { Light } = require("../three");
import keyInput from "./keyInput.js";
// import * as THREE from '../node_modules/three/build/three.js';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';


const ratio = window.innerWidth / window.innerHeight;

const scene = new THREE.Scene(); 
const camera = new THREE.PerspectiveCamera( 75, ratio, 0.1, 1000 ); 

const renderer = new THREE.WebGLRenderer(); 
renderer.setSize( window.innerWidth, window.innerHeight ); 
document.body.appendChild( renderer.domElement );

const light = new THREE.AmbientLight(0x404040);
const dLight = new THREE.DirectionalLight(0xffffff,0.5);

light.add(dLight);
scene.add(light);

const geometry = new THREE.BoxGeometry(50,0.1,50);
const material = new THREE.MeshPhongMaterial( { color: 0xaaffcc } );
const ground = new THREE.Mesh( geometry, material ); 

scene.add(ground);
camera.position.set(15,25,30);

const boxGeometry = new THREE.BoxGeometry(2,2,2);
const boxMaterial = new THREE.MeshPhongMaterial( { color: 0xff00 } );
const box = new THREE.Mesh( boxGeometry, boxMaterial ); 
box.position.set(0,2,5);

scene.add(box)

// const line = new THREE.LineBasicMaterial( { color: 0x0000ff } );
const points = [];
points.push( new THREE.Vector3( - 10, 0, 0 ) );
points.push( new THREE.Vector3( 0, 10, 0 ) );
points.push( new THREE.Vector3( 10, 0, 50 ) );

const lineGeometry = new THREE.BufferGeometry().setFromPoints( points );
const line = new THREE.Line( lineGeometry, material );

scene.add(line)

// const loader = new GLTFLoader();
// loader.load( 'path/to/model.glb', function ( gltf ) {
// 	scene.add( gltf.scene );
// }, undefined, function ( error ) {
// 	console.error( error );
// } );

// if ( WebGL.isWebGLAvailable() ) {
// 	// Initiate function or other initializations here
// 	animate();
// } else {
// 	const warning = WebGL.getWebGLErrorMessage();
// 	document.getElementById( 'container' ).appendChild( warning );
// }

function animate(){
    // cube.rotation.x+=0.01;
    // cube.rotation.y-=0.01;
    // cube.rotation.z+=0.01;
    // console.log("hi")
    requestAnimationFrame( animate );
    if(keyInput.isPressed(38)){
        console.log("hello")
        camera.position.x+=0.05;
        camera.position.y+=0.05;
        camera.position.z+=0.05;
    }
    if(keyInput.isPressed(40)){
        camera.position.x-=0.05;
        camera.position.y-=0.05;
        camera.position.z-=0.05;
    }
    camera.lookAt(ground.position)
    renderer.render( scene, camera ); 
} 

animate();

// renderer.render(scene, camera);