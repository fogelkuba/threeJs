// setup
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

window.addEventListener('resize', ()=> {
    var width = window.innerWidth;
    var height = window.innerHeight;

    renderer.setSize(width, height);
    camera.aspect= width / height;
    camera.updateProjectionMatrix();
})

//controls
var controls = new THREE.OrbitControls(camera, renderer.domElement);

// create shape
var geometry = new THREE.SphereGeometry(1, 25, 25);

// create material, color, image texture
var material = new THREE.MeshBasicMaterial(
    {
        color: 0xffff00,
        wireframe: true
    })
var sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

camera.position.z = 2;

// game logic
var update = function(){
    sphere.rotation.x += 0.00;
    sphere.rotation.y += .01;
};

// draw scene
var render = function(){
    renderer.render(scene, camera);
};

// run game loop => update, render, repeat
var GameLoop = function(){
    requestAnimationFrame(GameLoop);
    update();
    render();
};

// init
GameLoop();
