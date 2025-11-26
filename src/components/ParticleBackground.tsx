import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ParticleBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const circleRef = useRef<THREE.Mesh | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const targetMouseRef = useRef({ x: 0, y: 0 });
  const isHoveringRef = useRef(false);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true 
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.domElement.style.pointerEvents = 'none'; // Don't block clicks on content above
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Create a single round circle/sphere
    const geometry = new THREE.SphereGeometry(0.3, 32, 32);
    const material = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.8,
      side: THREE.DoubleSide
    });

    const circle = new THREE.Mesh(geometry, material);
    circle.position.set(0, 0, 0);
    scene.add(circle);
    circleRef.current = circle;

    // Mouse move handler - listen to window for better coverage
    const handleMouseMove = (event: MouseEvent) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const isInside = 
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom;
      
      isHoveringRef.current = isInside;
      
      if (isInside) {
        // Calculate relative position within the container
        const relativeX = (event.clientX - rect.left) / rect.width;
        const relativeY = (event.clientY - rect.top) / rect.height;
        
        // Normalize mouse coordinates to -1 to 1 range
        targetMouseRef.current.x = relativeX * 2 - 1;
        targetMouseRef.current.y = -(relativeY * 2 - 1);
      }
    };

    // Mouse leave handler - hide circle when mouse leaves
    const handleMouseLeave = () => {
      isHoveringRef.current = false;
    };

    // Convert screen coordinates to 3D space
    const screenToWorld = (x: number, y: number) => {
      const vector = new THREE.Vector3(x, y, 0.5);
      vector.unproject(camera);
      const dir = vector.sub(camera.position).normalize();
      const distance = -camera.position.z / dir.z;
      return camera.position.clone().add(dir.multiplyScalar(distance));
    };

    // Animation loop
    const animate = () => {
      animationFrameRef.current = requestAnimationFrame(animate);
      
      if (circleRef.current) {
        // Smooth mouse interpolation for circle movement
        mouseRef.current.x += (targetMouseRef.current.x - mouseRef.current.x) * 0.1;
        mouseRef.current.y += (targetMouseRef.current.y - mouseRef.current.y) * 0.1;

        // Convert normalized mouse coordinates to 3D world position
        const mouseWorld = screenToWorld(mouseRef.current.x, mouseRef.current.y);
        
        // Update circle position to follow cursor
        if (isHoveringRef.current) {
          circleRef.current.position.x = mouseWorld.x;
          circleRef.current.position.y = mouseWorld.y;
          circleRef.current.position.z = 0;
          
          // Fade in when hovering
          if (circleRef.current.material instanceof THREE.MeshBasicMaterial) {
            circleRef.current.material.opacity = Math.min(
              circleRef.current.material.opacity + 0.05,
              0.8
            );
          }
        } else {
          // Fade out when not hovering
          if (circleRef.current.material instanceof THREE.MeshBasicMaterial) {
            circleRef.current.material.opacity = Math.max(
              circleRef.current.material.opacity - 0.05,
              0
            );
          }
        }
      }
      
      renderer.render(scene, camera);
    };

    animate();

    // Add mouse event listeners
    window.addEventListener('mousemove', handleMouseMove);
    
    // Listen for mouse leave on the container
    if (containerRef.current) {
      containerRef.current.addEventListener('mouseleave', handleMouseLeave);
    }

    // Handle resize
    const handleResize = () => {
      if (!cameraRef.current || !rendererRef.current) return;
      
      cameraRef.current.aspect = window.innerWidth / window.innerHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      
      if (containerRef.current) {
        containerRef.current.removeEventListener('mouseleave', handleMouseLeave);
      }
      
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      
      if (containerRef.current && rendererRef.current) {
        try {
          containerRef.current.removeChild(rendererRef.current.domElement);
        } catch (e) {
          // Element might already be removed
        }
      }
      
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
      
      if (circleRef.current) {
        circleRef.current.geometry.dispose();
        if (circleRef.current.material instanceof THREE.Material) {
          circleRef.current.material.dispose();
        }
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 w-full h-full"
      style={{ zIndex: 0 }}
    />
  );
};

export default ParticleBackground;

