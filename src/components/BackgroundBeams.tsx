"use client";
import { useEffect, useRef } from "react";
import { cn } from "../lib/utils";

export const BackgroundBeams = ({ className }: { className?: string }) => {
    const beamsRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = beamsRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];
        const particleCount = 40;

        // Colors for the beams - enterprise blue/purple gradients
        const colors = [
            "rgba(59, 130, 246, 0.5)", // Blue
            "rgba(147, 51, 234, 0.5)", // Purple
            "rgba(99, 102, 241, 0.5)", // Indigo
        ];

        const init = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle(canvas.width, canvas.height, colors));
            }
        };

        class Particle {
            x: number;
            y: number;
            length: number;
            speed: number;
            angle: number;
            color: string;
            lineWidth: number;

            constructor(w: number, h: number, colors: string[]) {
                this.x = Math.random() * w;
                this.y = Math.random() * h;
                this.length = Math.random() * 100 + 50;
                this.speed = Math.random() * 0.5 + 0.2;
                this.angle = -45 * (Math.PI / 180); // 45 degrees upwards
                this.color = colors[Math.floor(Math.random() * colors.length)];
                this.lineWidth = Math.random() * 2 + 0.5;
            }

            update(w: number, h: number) {
                this.x += Math.cos(this.angle) * this.speed;
                this.y += Math.sin(this.angle) * this.speed;

                // Reset if out of bounds
                if (this.x > w + 100 || this.y < -100) {
                    this.x = Math.random() * w - 200; // Start slightly off screen left
                    this.y = h + 100; // Start slightly off screen bottom
                }
            }

            draw(ctx: CanvasRenderingContext2D) {
                ctx.beginPath();
                const endX = this.x - Math.cos(this.angle) * this.length;
                const endY = this.y - Math.sin(this.angle) * this.length;

                // Create gradient for the beam tail
                const gradient = ctx.createLinearGradient(this.x, this.y, endX, endY);
                gradient.addColorStop(0, this.color);
                gradient.addColorStop(1, "rgba(0,0,0,0)");

                ctx.strokeStyle = gradient;
                ctx.lineWidth = this.lineWidth;
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(endX, endY);
                ctx.stroke();
            }
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw subtle grid
            ctx.strokeStyle = "rgba(0,0,0,0.03)";
            ctx.lineWidth = 1;
            const gridSize = 40;

            // Vertical lines
            for (let x = 0; x <= canvas.width; x += gridSize) {
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, canvas.height);
                ctx.stroke();
            }

            // Horizontal lines
            for (let y = 0; y <= canvas.height; y += gridSize) {
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(canvas.width, y);
                ctx.stroke();
            }

            // Update and draw particles
            particles.forEach(p => {
                p.update(canvas.width, canvas.height);
                p.draw(ctx);
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        init();
        animate();

        const handleResize = () => {
            init();
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div
            className={cn(
                "absolute inset-0 z-0 pointer-events-none overflow-hidden",
                className
            )}
        >
            <canvas
                ref={beamsRef}
                className="absolute inset-0 w-full h-full opacity-60"
            />
            {/* Radial Gradient Mask */}
            <div className="absolute inset-0 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] pointer-events-none" />
        </div>
    );
};
