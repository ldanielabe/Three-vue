<script setup>
import THREE from 'three'
import OrbitControls from 'three-orbitcontrols'
</script>


<script>
  export default {
    data() {
      return {
        scene : new THREE.Scene(),
        camera : new THREE.PerspectiveCamera(60, 1, 1, 1000),
        raycaster : new THREE.Raycaster(),
        mouse : new THREE.Vector2(),
        renderer : new THREE.WebGLRenderer({
        antialias: true,
        canvas : renderer.domElement,
        controls : new OrbitControls(camera, canvas),
        cylinderMaterial : new THREE.MeshBasicMaterial({ color: 0xff0000 }),
        sphereMaterial : new THREE.MeshBasicMaterial({ color: 0x00ff00 }),
        boxMaterial : new THREE.MeshBasicMaterial({ color: 0x0000ff }),
        meshMaterial : new THREE.MeshStandardMaterial({
          color: 0x0055ff,
          flatShading: true
        }),
        geometry1 : new THREE.CylinderBufferGeometry(5, 5, 20, 32),
        cylinder : new THREE.Mesh(geometry1, cylinderMaterial),
        geometry2 : new THREE.SphereBufferGeometry(7, 32, 32),
        sphere : new THREE.Mesh(geometry2, sphereMaterial),
        geometry3 : new THREE.BoxBufferGeometry(10, 10, 10),
        cube : new THREE.Mesh(geometry3, boxMaterial),
        objects : [cylinder, sphere, cube],
        loader : new THREE.PLYLoader(),
        selected : cylinder,
        light1 : new THREE.SpotLight(),
        light2 : new THREE.SpotLight(),
        guiControls : new function() {
          this.color = cylinderMaterial.color.getStyle();
        }(),
        gui : new dat.GUI(),
        }),
      }
    },
    methods: {
      
      init(){
        var intersects = [];

        camera.position.setScalar(50);
        document.body.appendChild(canvas);
        cylinder.position.x = -20;
        scene.add(cylinder);

        scene.add(sphere);

        scene.add(cube);
        cube.position.x = 20;

        loader.load(
        "https://threejs.org/examples/models/ply/binary/Lucy100k.ply",
          function(geometry) {
            //geometry.computeVertexNormals();

            var mesh = new THREE.Mesh(geometry, meshMaterial);
            mesh.scale.multiplyScalar(0.04);
            mesh.position.x = 40;
            scene.add(mesh);
            objects.push(mesh);
          }
        );
  
      light1.position.set(150, 150, 50);
      //light1.castShadow = true;
      scene.add(light1);
      
      light2.position.set(-50, -130, -100);
      //light2.castShadow = true;
      scene.add(light2);
      
      gui
        .addColor(guiControls, "color")
        .listen()
        .onChange(function(e) {
          selected.material.color.setStyle(e);
        });

      renderer.domElement.addEventListener("click", onClick);

      },

      onClick(event) {
        mouse.x = event.clientX / window.innerWidth * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

        raycaster.setFromCamera(mouse, camera);
        intersects = raycaster.intersectObjects(objects);
        if (intersects.length > 0) {
          selected = intersects[0].object;
          guiControls.color = selected.material.color.getStyle();
        }
      },


      resize(renderer) {
        const canvas = renderer.domElement;
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;
        const needResize = canvas.width !== width || canvas.height !== height;
        if (needResize) {
          renderer.setSize(width, height, false);
        }
        return needResize;
      },

      render() {
        if (resize(renderer)) {
          camera.aspect = canvas.clientWidth / canvas.clientHeight;
          camera.updateProjectionMatrix();
        }
        renderer.render(scene, camera);
        requestAnimationFrame(render);
      },
    },
    mounted() {
      render();
    }
  }
</script>


<template>
    <h3>This is threejs</h3>
</template>