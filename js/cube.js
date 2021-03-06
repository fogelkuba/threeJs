// setup
(function(){var script=document.createElement('script');script.onload=function(){var stats=new Stats();document.body.appendChild(stats.dom);requestAnimationFrame(function loop(){stats.update();requestAnimationFrame(loop)});};script.src='//rawgit.com/mrdoob/stats.js/master/build/stats.min.js';document.head.appendChild(script);})()




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

//loaders
// var loader = new THREE.ObjectLoader();
// loader.load(
//         // 'models/Head.json',
//         'models/skull.json',
//         function (object){
//             scene.add(object)
//         }
// );

// create shape
var geometry = new THREE.CubeGeometry(0.5, 0.5, 0.5);
var skyGeometry = new THREE.CubeGeometry(100, 100, 100);

// create material, color, image texture

var materials = [
    new THREE.MeshLambertMaterial(
        {
            //right
            map: new THREE.TextureLoader().load('images/sky/greenhaze_lf.png'),
            side: THREE.BackSide
        }
    ),
    new THREE.MeshLambertMaterial(
        {
            //left
            map: new THREE.TextureLoader().load('images/sky/greenhaze_rt.png'),
            side: THREE.BackSide
        }
    ),
    new THREE.MeshLambertMaterial(
        {
            // top
            map: new THREE.TextureLoader().load('images/sky/greenhaze_up.png'),
            side: THREE.BackSide
        }
    ),
    new THREE.MeshLambertMaterial(
        {
            // bottom
            map: new THREE.TextureLoader().load('images/sky/greenhaze_dn.png'),
            side: THREE.BackSide
        }
    ),
    new THREE.MeshLambertMaterial(
        {
            // front
            map: new THREE.TextureLoader().load('images/sky/greenhaze_ft.png'),
            side: THREE.BackSide
        }
    ),
    new THREE.MeshLambertMaterial(
        {
            // back
            map: new THREE.TextureLoader().load('images/sky/greenhaze_bk.png'),
            side: THREE.BackSide
        }
    )
]

var materialCube = new THREE.MeshLambertMaterial(
    {
        color: 0xffff00,
        wireframe: false
    })

var skyMaterial = new THREE.MeshFaceMaterial(materialCube)
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

var material = new THREE.MeshFaceMaterial(material)
var sky = new THREE.Mesh(skyGeometry, skyMaterial);
scene.add(cube);


var floorGeometry = new THREE.CubeGeometry(5, 2, 5);
var floorMaterial = new THREE.MeshPhongMaterial({
    map: new THREE.TextureLoader().load('images/wood.jpg'),
    side: THREE.DoubleSide});
var floor = new THREE.Mesh(floorGeometry, floorMaterial);
scene.add(floor)
floor.position.y = 0.70;

camera.position.z = 1;

// light
var ambientLight = new THREE.AmbientLight( 0xffffff, .5);
scene.add(ambientLight)

var light1 = new THREE.PointLight(0xff0000, 4.0, 50);
// scene.add(light1)

var light2 = new THREE.PointLight(0x00ff00, 1.7, 50);
// scene.add(light2)

var light3 = new THREE.PointLight(0x0000ff, 3.3, 50);
// scene.add(light3)

var directionalLight = new THREE.DirectionalLight (0xffffff, 1);
directionalLight.position.set(0,1,0);
scene.add(directionalLight);

var spotLight = new THREE.SpotLight (0xffffff, 0.5);
directionalLight.position.set(0,0.1,0);
scene.add(spotLight);

// game logic
var update = function(){
    // cube.rotation.x += 0.00;
    // cube.rotation.y += .01;

    var time = Date.now() * 0.005;
    // light1.position.x = Math.sin(time * 0.7) * 30;
    // light1.position.y = Math.cos(time * 0.5) * 40;
    // light1.position.z = Math.cos(time * 0.3) * 30;
    //
    // light2.position.x = Math.cos(time * 0.3) * 30;
    // light2.position.y = Math.sin(time * 0.5) * 40;
    // light2.position.z = Math.sin(time * 0.7) * 30;
    //
    // light3.position.x = Math.sin(time * 0.7) * 30;
    // light3.position.y = Math.cos(time * 0.3) * 40;
    // light3.position.z = Math.sin(time * 0.5) * 30;
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
