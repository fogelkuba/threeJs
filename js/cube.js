// setup
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
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
var geometry = new THREE.CubeGeometry(0.5, 0.5, 0.5);

// create material, color, image texture

var cubeMaterials = [
    new THREE.MeshLambertMaterial(
        {
            //right
            map: new THREE.TextureLoader().load('images/img1.jpg'),
            side: THREE.FrontSide
        }
    ),
    new THREE.MeshLambertMaterial(
        {
            //left
            map: new THREE.TextureLoader().load('images/img2.jpg'),
            side: THREE.FrontSide
        }
    ),
    new THREE.MeshLambertMaterial(
        {
            // top
            map: new THREE.TextureLoader().load('images/img3.jpg'),
            side: THREE.FrontSide
        }
    ),
    new THREE.MeshLambertMaterial(
        {
            // bottom
            map: new THREE.TextureLoader().load('images/img4.jpg'),
            side: THREE.FrontSide
        }
    ),
    new THREE.MeshLambertMaterial(
        {
            // front
            map: new THREE.TextureLoader().load('images/img5.jpg'),
            side: THREE.FrontSide
        }
    ),
    new THREE.MeshLambertMaterial(
        {
            // back
            map: new THREE.TextureLoader().load('images/img6.jpg'),
            side: THREE.FrontSide
        }
    )
]

// var material = new THREE.MeshLambertMaterial(
//     {
//         color: 0xffff00,
//         wireframe: false
//     })
var material = new THREE.MeshFaceMaterial(cubeMaterials)


var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 1;

// light
var ambientLight = new THREE.AmbientLight( 0xffffff, 2.0);
scene.add(ambientLight)

// game logic
var update = function(){
    cube.rotation.x += 0.00;
    cube.rotation.y += .01;
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
