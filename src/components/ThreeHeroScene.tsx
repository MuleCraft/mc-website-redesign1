import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeHeroSceneProps {
  heroContainerRef?: React.RefObject<HTMLDivElement | null>;
}

const ThreeHeroScene = ({ heroContainerRef }: ThreeHeroSceneProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const pointsRef = useRef<THREE.Points | null>(null);
  const linesRef = useRef<THREE.LineSegments | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const startTimeRef = useRef(0);
  const mouseRef = useRef({ x: 0, y: 0 });
  const targetMouseRef = useRef({ x: 0, y: 0 });
  const isHoveringRef = useRef(false);
  const basePositionRef = useRef({ x: 3.2, y: 0.4, z: 0 });
  const scaleRef = useRef(1);
  const targetScaleRef = useRef(1);
  const zPositionRef = useRef(0);
  const targetZPositionRef = useRef(0);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.z = 8;
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true 
    });
    renderer.setPixelRatio(window.devicePixelRatio || 1);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Create icosahedron geometry with higher subdivision for more vertices and lines
    const geometry = new THREE.IcosahedronGeometry(2.2, 2); // Increased from 1 to 2 for more detail
    
    // Create points material for dotted structure - blue/violet tones like the image
    const pointsMaterial = new THREE.PointsMaterial({
      color: 0x6b7fd9, // Light blue-violet color
      size: 0.12,
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true,
    });

    // Create points at each vertex
    const points = new THREE.Points(geometry, pointsMaterial);
    scene.add(points);
    pointsRef.current = points;

    // Create edges geometry to get all edges/lines of the structure
    const edgesGeometry = new THREE.EdgesGeometry(geometry);
    
    // Create line material - small, thin blue lines
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x4b7fd9, // Blue color for lines
      transparent: true,
      opacity: 0.6,
      linewidth: 1, // Thin lines (note: linewidth may not work on all systems)
    });

    // Create line segments from edges
    const lines = new THREE.LineSegments(edgesGeometry, lineMaterial);
    scene.add(lines);
    linesRef.current = lines;

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.55);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xa03291, 0.8);
    dirLight1.position.set(5, 4, 6);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x4b4fe2, 0.7);
    dirLight2.position.set(-4, -3, -6);
    scene.add(dirLight2);

    // Position hero object behind text, slightly to side
    points.position.set(3.2, 0.4, 0);
    lines.position.copy(points.position);

    // Mouse move handler - track position relative to hero container
    const handleMouseMove = (event: MouseEvent) => {
      // Use hero container ref if provided, otherwise use local container
      const targetContainer = heroContainerRef?.current || containerRef.current;
      if (!targetContainer) return;
      
      const rect = targetContainer.getBoundingClientRect();
      const isInside = 
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom;
      
      isHoveringRef.current = isInside;
      
      if (isInside) {
        // Calculate relative position within the hero container (0 to 1)
        const relativeX = (event.clientX - rect.left) / rect.width;
        const relativeY = (event.clientY - rect.top) / rect.height;
        
        // Normalize to -1 to 1 range for smooth movement
        targetMouseRef.current.x = relativeX * 2 - 1;
        targetMouseRef.current.y = -(relativeY * 2 - 1);
        
        // Scale up and move forward when hovering
        // Scale increases from 1 to 1.5, z moves from 0 to -2 (towards camera)
        targetScaleRef.current = 1.5;
        targetZPositionRef.current = -2;
      } else {
        targetScaleRef.current = 1;
        targetZPositionRef.current = 0;
      }
    };

    // Mouse leave handler - reset to center when leaving hero area
    const handleMouseLeave = () => {
      isHoveringRef.current = false;
      targetMouseRef.current.x = 0;
      targetMouseRef.current.y = 0;
      targetScaleRef.current = 1; // Reset scale
      targetZPositionRef.current = 0; // Reset z position
    };

    // Animation
    startTimeRef.current = performance.now();
    const animate = () => {
      animationFrameRef.current = requestAnimationFrame(animate);

      if (pointsRef.current && linesRef.current) {
        // Smooth mouse interpolation - faster when hovering
        const lerpSpeed = isHoveringRef.current ? 0.08 : 0.03;
        mouseRef.current.x += (targetMouseRef.current.x - mouseRef.current.x) * lerpSpeed;
        mouseRef.current.y += (targetMouseRef.current.y - mouseRef.current.y) * lerpSpeed;

        // Smooth scale interpolation - structure grows when hovering
        scaleRef.current += (targetScaleRef.current - scaleRef.current) * 0.1;
        pointsRef.current.scale.set(scaleRef.current, scaleRef.current, scaleRef.current);
        linesRef.current.scale.copy(pointsRef.current.scale);

        // Smooth z-position interpolation - structure moves forward when hovering
        zPositionRef.current += (targetZPositionRef.current - zPositionRef.current) * 0.1;
        
        const t = (performance.now() - startTimeRef.current) * 0.00025;

        // Base rotation (always active)
        pointsRef.current.rotation.x += 0.003;
        pointsRef.current.rotation.y += 0.004;
        linesRef.current.rotation.copy(pointsRef.current.rotation);

        // Cursor-based rotation and position (more pronounced when hovering)
        if (isHoveringRef.current) {
          // Enhanced tilt effect based on cursor position in hover area
          const tiltX = mouseRef.current.y * 0.8; // Tilt up/down based on cursor Y
          const tiltY = mouseRef.current.x * 0.8; // Tilt left/right based on cursor X
          
          pointsRef.current.rotation.x += tiltX * 0.02;
          pointsRef.current.rotation.y += tiltY * 0.02;
          linesRef.current.rotation.copy(pointsRef.current.rotation);

          // Position movement - follows cursor across full hero background
          // Map cursor position to wider 3D space range for full travel
          const floatY = Math.sin(t * 3) * 0.3;
          
          // Calculate movement range based on viewport
          // Horizontal: from left edge (-4) to right edge (8) = 12 units range
          // Vertical: from top (-2) to bottom (2) = 4 units range
          const maxHorizontalRange = 6; // Total horizontal travel distance
          const maxVerticalRange = 2.5; // Total vertical travel distance
          
          const cursorY = mouseRef.current.y * maxVerticalRange; // Full vertical movement
          const cursorX = mouseRef.current.x * maxHorizontalRange; // Full horizontal movement
          
          pointsRef.current.position.y = basePositionRef.current.y + floatY + cursorY;
          pointsRef.current.position.x = basePositionRef.current.x + cursorX;
          pointsRef.current.position.z = basePositionRef.current.z + zPositionRef.current;
          linesRef.current.position.copy(pointsRef.current.position);
        } else {
          // Return to base position when not hovering
          const floatY = Math.sin(t * 3) * 0.3;
          pointsRef.current.position.y = basePositionRef.current.y + floatY;
          pointsRef.current.position.x += (basePositionRef.current.x - pointsRef.current.position.x) * 0.05;
          pointsRef.current.position.z = basePositionRef.current.z + zPositionRef.current;
          linesRef.current.position.copy(pointsRef.current.position);
        }
      }

      renderer.render(scene, camera);
    };

    animate();

    // Resize handling
    const handleResize = () => {
      if (!cameraRef.current || !rendererRef.current) return;

      const w = window.innerWidth;
      const h = window.innerHeight;

      cameraRef.current.aspect = w / h;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    
    // Listen for mouse leave on the hero container
    const targetContainer = heroContainerRef?.current || containerRef.current;
    if (targetContainer) {
      targetContainer.addEventListener('mouseleave', handleMouseLeave);
    }

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      
      const targetContainer = heroContainerRef?.current || containerRef.current;
      if (targetContainer) {
        targetContainer.removeEventListener('mouseleave', handleMouseLeave);
      }

      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      if (container && rendererRef.current) {
        try {
          container.removeChild(rendererRef.current.domElement);
        } catch (e) {
          // Element might already be removed
        }
      }

      if (rendererRef.current) {
        rendererRef.current.dispose();
      }

      if (pointsRef.current) {
        pointsRef.current.geometry.dispose();
        if (pointsRef.current.material instanceof THREE.Material) {
          pointsRef.current.material.dispose();
        }
      }

      if (linesRef.current) {
        linesRef.current.geometry.dispose();
        if (linesRef.current.material instanceof THREE.Material) {
          linesRef.current.material.dispose();
        }
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id="three-hero-scene"
      className="absolute inset-0 z-0"
      style={{ pointerEvents: 'none' }}
    />
  );
};

export default ThreeHeroScene;

