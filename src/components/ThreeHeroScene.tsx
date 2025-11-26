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
  const positionsRef = useRef<Float32Array | null>(null);
  const originalPositionsRef = useRef<Float32Array | null>(null);
  const colorsRef = useRef<Float32Array | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const startTimeRef = useRef(0);
  const mouseRef = useRef({ x: 0, y: 0 });
  const targetMouseRef = useRef({ x: 0, y: 0 });
  const isHoveringRef = useRef(false);
  const basePositionRef = useRef({ x: 3.2, y: 0.4, z: 0 });
  const scaleRef = useRef(1);
  const targetScaleRef = useRef(1);
  const scaleXRef = useRef(1);
  const scaleYRef = useRef(1);
  const scaleZRef = useRef(1);
  const targetScaleXRef = useRef(1);
  const targetScaleYRef = useRef(1);
  const targetScaleZRef = useRef(1);
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

    // Enhanced noise function for more organic, flowing movement
    const noise = (x: number, y: number, z: number, time: number): number => {
      const n1 = Math.sin(x * 0.15 + time * 1.2) * 0.5;
      const n2 = Math.cos(y * 0.12 + time * 0.9) * 0.3;
      const n3 = Math.sin(z * 0.18 + time * 1.5) * 0.4;
      const n4 = Math.cos((x + y + z) * 0.1 + time * 0.6) * 0.2;
      return n1 + n2 + n3 + n4;
    };
    
    // Flow field function for directional movement
    const flowField = (x: number, y: number, z: number, time: number): { x: number; y: number; z: number } => {
      const angle = (x + y + z) * 0.1 + time;
      const strength = 0.4;
      return {
        x: Math.cos(angle) * strength,
        y: Math.sin(angle * 1.3) * strength,
        z: Math.cos(angle * 0.7) * strength,
      };
    };

    // Create particle field - Dynamic Pulsating Particle Field
    const particleCount = 1200; // Increased for more visible effect
    const positions = new Float32Array(particleCount * 3);
    const originalPositions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    
    // Base color (blue-violet): RGB values normalized (0-1)
    const baseColor = { r: 0.42, g: 0.50, b: 0.85 }; // #6b7fd9
    const whiteColor = { r: 1.0, g: 1.0, b: 1.0 }; // White
    
    // Distribute particles in a spherical/circular pattern
    const baseRadius = 1.8;
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      
      // Spherical distribution with some randomness
      const theta = Math.random() * Math.PI * 2; // Azimuth angle
      const phi = Math.acos(2 * Math.random() - 1); // Polar angle
      const radius = baseRadius + (Math.random() - 0.5) * 0.5; // Slight radius variation
      
      // Convert spherical to Cartesian
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);
      
      positions[i3] = x;
      positions[i3 + 1] = y;
      positions[i3 + 2] = z;
      
      // Store original positions
      originalPositions[i3] = x;
      originalPositions[i3 + 1] = y;
      originalPositions[i3 + 2] = z;
      
      // Initialize colors with base color
      colors[i3] = baseColor.r;
      colors[i3 + 1] = baseColor.g;
      colors[i3 + 2] = baseColor.b;
    }
    
    positionsRef.current = positions;
    originalPositionsRef.current = originalPositions;
    colorsRef.current = colors;
    
    // Create geometry and update positions and colors
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    
    // Create points material for dotted structure - blue/violet tones
    const pointsMaterial = new THREE.PointsMaterial({
      color: 0x6b7fd9, // Light blue-violet color (fallback)
      size: 0.05, // Smaller width for each particle
      transparent: true,
      opacity: 0.85,
      sizeAttenuation: true,
      vertexColors: true, // Enable vertex colors for per-particle coloring
    });

    // Create points
    const points = new THREE.Points(geometry, pointsMaterial);
    scene.add(points);
    pointsRef.current = points;

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
        
        // Directional scaling based on hover direction
        // X direction: right = expand X width, left = contract X width
        // Y direction: up = expand Y height, down = contract Y height
        // Z direction: forward = expand Z depth
        const directionalScaleAmount = 0.5; // How much to scale in hover direction
        // X: positive (right) expands, negative (left) contracts
        targetScaleXRef.current = 1 + (targetMouseRef.current.x * directionalScaleAmount);
        // Y: positive (up) expands, negative (down) contracts (invert Y since it's normalized)
        targetScaleYRef.current = 1 + (-targetMouseRef.current.y * directionalScaleAmount);
        // Z: always slightly forward when hovering
        targetScaleZRef.current = 1.2;
      } else {
        targetScaleRef.current = 1;
        targetZPositionRef.current = 0;
        // Reset directional scales
        targetScaleXRef.current = 1;
        targetScaleYRef.current = 1;
        targetScaleZRef.current = 1;
      }
    };

    // Mouse leave handler - reset to center when leaving hero area
    const handleMouseLeave = () => {
      isHoveringRef.current = false;
      targetMouseRef.current.x = 0;
      targetMouseRef.current.y = 0;
      targetScaleRef.current = 1; // Reset scale
      targetZPositionRef.current = 0; // Reset z position
      // Reset directional scales
      targetScaleXRef.current = 1;
      targetScaleYRef.current = 1;
      targetScaleZRef.current = 1;
    };

    // Animation
    startTimeRef.current = performance.now();
    const animate = () => {
      animationFrameRef.current = requestAnimationFrame(animate);

      if (pointsRef.current && positionsRef.current && originalPositionsRef.current) {
        // Smooth mouse interpolation - faster when hovering
        const lerpSpeed = isHoveringRef.current ? 0.08 : 0.03;
        mouseRef.current.x += (targetMouseRef.current.x - mouseRef.current.x) * lerpSpeed;
        mouseRef.current.y += (targetMouseRef.current.y - mouseRef.current.y) * lerpSpeed;

        // Smooth scale interpolation - structure grows when hovering
        scaleRef.current += (targetScaleRef.current - scaleRef.current) * 0.1;

        // Smooth directional scale interpolation - expands/contracts based on hover direction
        scaleXRef.current += (targetScaleXRef.current - scaleXRef.current) * 0.12;
        scaleYRef.current += (targetScaleYRef.current - scaleYRef.current) * 0.12;
        scaleZRef.current += (targetScaleZRef.current - scaleZRef.current) * 0.12;

        // Smooth z-position interpolation - structure moves forward when hovering
        zPositionRef.current += (targetZPositionRef.current - zPositionRef.current) * 0.1;
        
        const elapsed = (performance.now() - startTimeRef.current) * 0.001;
        const t = elapsed * 0.25;

        // Overall structure size control - hover takes priority, timing when not hovering
        if (isHoveringRef.current) {
          // When hovering: Overall structure size ONLY controlled by hover direction
          // No automatic pulse - hover direction is the only factor
          
          // Base scale from hover (1.0 to 1.5 based on general hover)
          const hoverBaseScale = scaleRef.current;
          
          // Apply directional scaling to overall structure based on hover direction
          // X: expands right, contracts left
          // Y: expands up, contracts down  
          // Z: slight forward expansion
          const finalScaleX = hoverBaseScale * scaleXRef.current;
          const finalScaleY = hoverBaseScale * scaleYRef.current;
          const finalScaleZ = hoverBaseScale * scaleZRef.current;
          
          // Set overall structure scale - no pulse influence
          pointsRef.current.scale.set(finalScaleX, finalScaleY, finalScaleZ);
        } else {
          // When not hovering: Overall structure size ONLY controlled by automatic timing pulse
          // Very slow pulse: takes much longer to expand and contract
          const pulseSpeed = Math.PI * 0.2; // Very slow pulse speed
          const pulseAmount = 0.5; // Pulse amount (50% size variation: 0.5x to 1.5x)
          const basePulseScale = 1.0;
          
          // Calculate pulsing scale for entire structure (loops between 0.5 and 1.5, very slowly)
          const pulseScale = basePulseScale + Math.sin(elapsed * pulseSpeed) * pulseAmount;
          
          // Apply uniform pulse scale to overall structure - no hover influence
          pointsRef.current.scale.set(pulseScale, pulseScale, pulseScale);
        }
        
        // Update particle positions with enhanced noise and flow to break circular shape
        const noiseStrength = 0.6; // Increased noise strength to break circular shape
        const flowStrength = 0.5; // Increased flow field strength
        const positions = positionsRef.current;
        const originalPositions = originalPositionsRef.current;
        const colors = colorsRef.current;
        
        // Base color and white color for interpolation
        const baseColor = { r: 0.42, g: 0.50, b: 0.85 }; // #6b7fd9
        const whiteColor = { r: 1.0, g: 1.0, b: 1.0 }; // White
        
        // Color animation speed (very slow for smooth, gradual transition)
        const colorPulseSpeed = Math.PI * 0.1; // Very slow for very gradual color change
        
        for (let i = 0; i < particleCount; i++) {
          const i3 = i * 3;
          const origX = originalPositions[i3];
          const origY = originalPositions[i3 + 1];
          const origZ = originalPositions[i3 + 2];
          
          // Enhanced noise-based displacement with multiple frequencies to break circular shape
          const noiseX = noise(origX, origY, origZ, elapsed);
          const noiseY = noise(origY, origZ, origX, elapsed * 0.8);
          const noiseZ = noise(origZ, origX, origY, elapsed * 1.2);
          
          // Additional high-frequency noise for more distortion
          const highFreqNoiseX = Math.sin(origX * 2 + elapsed * 3) * 0.2;
          const highFreqNoiseY = Math.cos(origY * 2 + elapsed * 2.5) * 0.2;
          const highFreqNoiseZ = Math.sin(origZ * 2 + elapsed * 3.5) * 0.2;
          
          // Flow field for directional movement (creates constant flow)
          const flow = flowField(origX, origY, origZ, elapsed);
          
          // Add wave-like motion with different frequencies to break symmetry
          const waveX = Math.sin((origX + elapsed * 2) * 0.4) * 0.25;
          const waveY = Math.cos((origY + elapsed * 1.5) * 0.5) * 0.25;
          const waveZ = Math.sin((origZ + elapsed * 1.8) * 0.35) * 0.25;
          
          // Asymmetric distortion to break circular shape
          const distortionX = Math.sin(origY * 0.5 + elapsed) * 0.15;
          const distortionY = Math.cos(origZ * 0.5 + elapsed * 0.7) * 0.15;
          const distortionZ = Math.sin(origX * 0.5 + elapsed * 1.3) * 0.15;
          
          // Combine all effects for final position (more distortion = less circular)
          positions[i3] = origX + (noiseX * noiseStrength) + (flow.x * flowStrength) + waveX + highFreqNoiseX + distortionX;
          positions[i3 + 1] = origY + (noiseY * noiseStrength) + (flow.y * flowStrength) + waveY + highFreqNoiseY + distortionY;
          positions[i3 + 2] = origZ + (noiseZ * noiseStrength) + (flow.z * flowStrength) + waveZ + highFreqNoiseZ + distortionZ;
          
          // Color animation - slowly fade to white and back to normal
          // Each particle has a slight phase offset based on position for wave effect
          const colorPhase = (origX + origY + origZ) * 0.3 + elapsed * colorPulseSpeed;
          // Use sine wave: -1 to 1, then normalize to 0-1 for smooth fade
          const colorLerp = (Math.sin(colorPhase) + 1) * 0.5; // 0 to 1
          
          // Interpolate between base color and white
          colors[i3] = baseColor.r + (whiteColor.r - baseColor.r) * colorLerp;
          colors[i3 + 1] = baseColor.g + (whiteColor.g - baseColor.g) * colorLerp;
          colors[i3 + 2] = baseColor.b + (whiteColor.b - baseColor.b) * colorLerp;
        }
        
        // Update geometry
        pointsRef.current.geometry.attributes.position.needsUpdate = true;
        pointsRef.current.geometry.attributes.color.needsUpdate = true;

        // Slow rotation for visual interest
        pointsRef.current.rotation.x += 0.001;
        pointsRef.current.rotation.y += 0.0015;

        // Cursor-based rotation and position (more pronounced when hovering)
        if (isHoveringRef.current) {
          // Enhanced tilt effect based on cursor position in hover area
          const tiltX = mouseRef.current.y * 0.6;
          const tiltY = mouseRef.current.x * 0.6;
          
          pointsRef.current.rotation.x += tiltX * 0.015;
          pointsRef.current.rotation.y += tiltY * 0.015;

          // Position movement - follows cursor across full hero background
          const floatY = Math.sin(t * 3) * 0.3;
          
          const maxHorizontalRange = 6;
          const maxVerticalRange = 2.5;
          
          const cursorY = mouseRef.current.y * maxVerticalRange;
          const cursorX = mouseRef.current.x * maxHorizontalRange;
          
          pointsRef.current.position.y = basePositionRef.current.y + floatY + cursorY;
          pointsRef.current.position.x = basePositionRef.current.x + cursorX;
          pointsRef.current.position.z = basePositionRef.current.z + zPositionRef.current;
        } else {
          // Return to base position when not hovering
        const floatY = Math.sin(t * 3) * 0.3;
          pointsRef.current.position.y = basePositionRef.current.y + floatY;
          pointsRef.current.position.x += (basePositionRef.current.x - pointsRef.current.position.x) * 0.05;
          pointsRef.current.position.z = basePositionRef.current.z + zPositionRef.current;
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

