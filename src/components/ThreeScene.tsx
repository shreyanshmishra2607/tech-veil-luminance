
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeSceneProps {
  type?: 'particles' | 'grid' | 'wireframe';
  density?: number;
  color?: string;
  speed?: number;
  className?: string;
}

const ThreeScene = ({ 
  type = 'particles', 
  density = 100, 
  color = '#00f2ff', 
  speed = 0.001,
  className = ''
}: ThreeSceneProps) => {
  const mountRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!mountRef.current) return;
    
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);
    
    // Camera position
    camera.position.z = 30;
    
    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    let object3D: THREE.Object3D | THREE.Points;
    
    // Create object based on type
    if (type === 'particles') {
      // Particles
      const particlesGeometry = new THREE.BufferGeometry();
      const particlesCount = density;
      const positions = new Float32Array(particlesCount * 3);
      
      for (let i = 0; i < particlesCount * 3; i++) {
        positions[i] = (Math.random() - 0.5) * 100;
      }
      
      particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      
      const particlesMaterial = new THREE.PointsMaterial({
        color: color,
        size: 0.2,
        transparent: true,
        opacity: 0.8,
        sizeAttenuation: true
      });
      
      object3D = new THREE.Points(particlesGeometry, particlesMaterial);
      scene.add(object3D);
    } else if (type === 'grid') {
      // Grid
      const gridHelper = new THREE.GridHelper(50, 50, 0x00f2ff, 0x00f2ff);
      (gridHelper.material as THREE.Material).transparent = true;
      (gridHelper.material as THREE.Material).opacity = 0.2;
      object3D = gridHelper;
      scene.add(gridHelper);
      
      // Add additional elements to the grid
      const geometry = new THREE.BoxGeometry(1, 1, 1);
      const material = new THREE.MeshPhongMaterial({ 
        color: color,
        wireframe: true,
        transparent: true,
        opacity: 0.8
      });
      
      for (let i = 0; i < density / 10; i++) {
        const cube = new THREE.Mesh(geometry, material);
        cube.position.x = (Math.random() - 0.5) * 40;
        cube.position.y = (Math.random() - 0.5) * 40;
        cube.position.z = (Math.random() - 0.5) * 40;
        cube.scale.set(
          Math.random() * 2 + 0.5,
          Math.random() * 2 + 0.5,
          Math.random() * 2 + 0.5
        );
        scene.add(cube);
      }
    } else if (type === 'wireframe') {
      // Wireframe
      const sphereGeometry = new THREE.IcosahedronGeometry(10, 1);
      const material = new THREE.MeshPhongMaterial({
        color: color,
        wireframe: true,
        transparent: true,
        opacity: 0.7
      });
      
      object3D = new THREE.Mesh(sphereGeometry, material);
      scene.add(object3D);
    }
    
    // Lights
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);
    
    // Handle window resize
    const handleResize = () => {
      if (!mountRef.current) return;
      
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      
      if (object3D) {
        object3D.rotation.x += speed;
        object3D.rotation.y += speed * 1.5;
      }
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      
      // Dispose resources
      if (object3D instanceof THREE.Mesh) {
        object3D.geometry.dispose();
        (object3D.material as THREE.Material).dispose();
      } else if (object3D instanceof THREE.Points) {
        object3D.geometry.dispose();
        (object3D.material as THREE.Material).dispose();
      }
      
      renderer.dispose();
    };
  }, [type, density, color, speed]);
  
  return <div ref={mountRef} className={`absolute top-0 left-0 w-full h-full -z-10 ${className}`} />;
};

export default ThreeScene;
