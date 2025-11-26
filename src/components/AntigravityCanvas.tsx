import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
}

const AntigravityCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const widthRef = useRef(0);
  const heightRef = useRef(0);
  const mouseRef = useRef({ x: 0, y: 0 });
  const targetMouseRef = useRef({ x: 0, y: 0 });

  const particleCount = 60;
  const moveSpeed = 0.3;
  const cursorInfluenceRadius = 200;
  const cursorRepelStrength = 0.5;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      widthRef.current = canvas.width = window.innerWidth;
      heightRef.current = canvas.height = window.innerHeight;
      initParticles();
    };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;

      constructor() {
        this.x = Math.random() * widthRef.current;
        this.y = Math.random() * heightRef.current;
        this.vx = (Math.random() - 0.5) * moveSpeed;
        this.vy = (Math.random() - 0.5) * moveSpeed;
        this.size = Math.random() * 2 + 1;
      }

      update(mouseX: number, mouseY: number) {
        // Calculate distance from particle to cursor
        const dx = this.x - mouseX;
        const dy = this.y - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Apply cursor influence (repel particles)
        if (distance < cursorInfluenceRadius && distance > 0) {
          const force = (1 - distance / cursorInfluenceRadius) * cursorRepelStrength;
          const angle = Math.atan2(dy, dx);
          this.vx += Math.cos(angle) * force;
          this.vy += Math.sin(angle) * force;
        }

        // Apply velocity with damping
        this.vx *= 0.98;
        this.vy *= 0.98;

        this.x += this.vx;
        this.y += this.vy;

        // Boundary bounce
        if (this.x < 0 || this.x > widthRef.current) this.vx *= -1;
        if (this.y < 0 || this.y > heightRef.current) this.vy *= -1;

        // Keep particles within bounds
        this.x = Math.max(0, Math.min(widthRef.current, this.x));
        this.y = Math.max(0, Math.min(heightRef.current, this.y));
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(160, 50, 145, 0.15)';
        ctx.fill();
      }
    }

    const initParticles = () => {
      particlesRef.current = [];
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push(new Particle());
      }
    };

    // Mouse move handler
    const handleMouseMove = (event: MouseEvent) => {
      targetMouseRef.current.x = event.clientX;
      targetMouseRef.current.y = event.clientY;
    };

    // Smooth mouse interpolation
    const updateMouse = () => {
      mouseRef.current.x += (targetMouseRef.current.x - mouseRef.current.x) * 0.1;
      mouseRef.current.y += (targetMouseRef.current.y - mouseRef.current.y) * 0.1;
    };

    const animateParticles = () => {
      if (!ctx || !canvas) return;

      // Smooth mouse position
      updateMouse();

      ctx.clearRect(0, 0, widthRef.current, heightRef.current);

      const particles = particlesRef.current;
      for (let i = 0; i < particles.length; i++) {
        particles[i].update(mouseRef.current.x, mouseRef.current.y);
        particles[i].draw();
      }

      animationFrameRef.current = requestAnimationFrame(animateParticles);
    };

    resize();
    animateParticles();

    const handleResize = () => {
      resize();
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="antigravity-canvas"
      className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
      style={{ opacity: 0.6 }}
    />
  );
};

export default AntigravityCanvas;

