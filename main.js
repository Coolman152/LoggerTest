
window.addEventListener("load", () => {

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x1e1e2f);

  const camera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.set(5, 6, 8);
  camera.lookAt(0,0,0);

  const renderer = new THREE.WebGLRenderer({antialias:true});
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(5,10,5);
  scene.add(light);

  const ambient = new THREE.AmbientLight(0xffffff, 0.4);
  scene.add(ambient);

  const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(20,20),
    new THREE.MeshStandardMaterial({color:0x2f8a3a})
  );
  ground.rotation.x = -Math.PI/2;
  scene.add(ground);

  const cube = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshStandardMaterial({color:0xff4444})
  );
  cube.position.y = 0.5;
  scene.add(cube);

  function animate(){
    cube.rotation.y += 0.01;
    renderer.render(scene,camera);
    requestAnimationFrame(animate);
  }

  animate();

});
