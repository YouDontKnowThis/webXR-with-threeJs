// THREE.JS LAST VERSION ===> three@0.126.1
import * as THREE from "https://unpkg.com/three@0.126.1/build/three.module.js";
import { OrbitControls } from "https://unpkg.com/three@0.126.1/examples/jsm/controls/OrbitControls.js";

let scene,
  camera,
  renderer,
  controls,
  controllers,
  width = window.innerWidth,
  height = window.innerHeight;

const raycaster = new THREE.Raycaster();
const workingMatrix = new THREE.Matrix4();
const workingVector = new THREE.Vector3();

const init = () => {
  const container = document.createElement("div");
  document.body.appendChild(container);

  camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
  camera.position.set(0, 1.6, 3);

  scene = new THREE.Scene();
  scene.background = new THREE.Color("#333");

  scene.add(new THREE.HemisphereLight(0x606060, 0x404040));

  const light = new THREE.DirectionalLight(0xffffff);
  light.position.set(1, 1, 1).normalize();
  scene.add(light);

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(width, height);
  container.appendChild(renderer.domElement);

  controls = new OrbitControls(camera, renderer.domElement);
  controls.target.set(0, 1.6, 0);
  controls.update();

  renderer.setAnimationLoop(render);

  window.addEventListener("resize", resize, false);
};

const random = (min, max) => {
  return Math.random() * (max - min) + min;
};

const resize = () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
};

const render = () => {
  renderer.render(scene, camera);
};

init();
