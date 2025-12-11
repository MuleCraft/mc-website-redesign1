"use client";
import { useEffect, useRef } from "react";
import { cn } from "../lib/utils";

export const HeroBackground = ({ className }: { className?: string }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number | null = null;
        let ripples: Ripple[] = [];
        let time = 0;
        let keepAlive: ReturnType<typeof setInterval> | null = null;

        const init = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            ripples = [];

            // Create concentric ripples from center
            const numRipples = 5;
            for (let i = 0; i < numRipples; i++) {
                ripples.push(new Ripple(canvas.width, canvas.height, i));
            }
        };

        class Ripple {
            centerX: number;
            centerY: number;
            baseRadius: number;
            maxRadius: number;
            lineWidth: number;
            color: string;
            offset: number;
            velocityX: number;
            velocityY: number;
            initialX: number;
            initialY: number;
            canvasWidth: number;
            canvasHeight: number;

            constructor(w: number, h: number, index: number) {
                this.canvasWidth = w;
                this.canvasHeight = h;
                
                // Random starting positions spread across canvas
                this.initialX = (w / 2) + (Math.random() - 0.5) * w * 0.6;
                this.initialY = (h / 2) + (Math.random() - 0.5) * h * 0.6;
                this.centerX = this.initialX;
                this.centerY = this.initialY;
                
                this.baseRadius = 150 + index * 180; // Good spacing between rings
                this.maxRadius = Math.max(w, h) * 1.5;
                this.lineWidth = 2;
                this.offset = index * 0.8; // Phase offset for wave effect

                // Dynamic velocity - each ripple moves at different speed and direction
                const speed = 0.1 + Math.random() * 0.15;
                const angle = Math.random() * Math.PI * 2;
                this.velocityX = Math.cos(angle) * speed;
                this.velocityY = Math.sin(angle) * speed;

                // MUCH more visible gradient colors
                const colors = [
                    "rgba(59, 130, 246, 0.35)",   // Blue - very visible
                    "rgba(147, 51, 234, 0.30)",   // Purple - very visible
                    "rgba(79, 70, 229, 0.32)",    // Indigo - very visible
                    "rgba(236, 72, 153, 0.28)",   // Pink - very visible
                    "rgba(14, 165, 233, 0.30)",   // Sky - very visible
                ];
                this.color = colors[index % colors.length];
            }

            update(time: number) {
                // Dynamic movement - ripples drift around (constrained to stay visible)
                const driftX = Math.sin(time * 0.0003 + this.offset) * 300;
                const driftY = Math.cos(time * 0.0004 + this.offset * 1.2) * 300;
                
                // Use modulo to keep movement within bounds while still allowing continuous animation
                const timeMod = time % 200000; // Reset periodically to prevent overflow
                this.centerX = this.initialX + driftX + (timeMod * this.velocityX);
                this.centerY = this.initialY + driftY + (timeMod * this.velocityY);
                
                // Keep ripples within visible bounds (with padding for smooth wrapping)
                const padding = this.maxRadius;
                if (this.centerX < -padding) this.centerX = this.canvasWidth + padding;
                if (this.centerX > this.canvasWidth + padding) this.centerX = -padding;
                if (this.centerY < -padding) this.centerY = this.canvasHeight + padding;
                if (this.centerY > this.canvasHeight + padding) this.centerY = -padding;
                
                // Pulsing/breathing effect with more variation
                const pulse = Math.sin(time * 0.0006 + this.offset) * 50;
                const pulse2 = Math.cos(time * 0.0008 + this.offset * 1.5) * 30;
                return this.baseRadius + pulse + pulse2;
            }

            draw(ctx: CanvasRenderingContext2D, currentRadius: number) {
                // Create gradient for the ring
                const gradient = ctx.createRadialGradient(
                    this.centerX,
                    this.centerY,
                    currentRadius - 80,
                    this.centerX,
                    this.centerY,
                    currentRadius + 80
                );

                gradient.addColorStop(0, "rgba(0, 0, 0, 0)");
                gradient.addColorStop(0.5, this.color);
                gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

                ctx.beginPath();
                ctx.arc(this.centerX, this.centerY, currentRadius, 0, Math.PI * 2);
                ctx.strokeStyle = gradient;
                ctx.lineWidth = 160; // Very thick rings
                ctx.stroke();
            }
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            time += 16; // ~60fps
            
            // Reset time periodically to prevent overflow
            if (time > 1000000) {
                time = 0;
            }

            // Draw all ripples
            ripples.forEach((ripple) => {
                const currentRadius = ripple.update(time);
                ripple.draw(ctx, currentRadius);
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        init();
        animate();
        
        // Ensure animation continues even if there are any issues
        keepAlive = setInterval(() => {
            if (!animationFrameId) {
                animate();
            }
        }, 1000);

        const handleResize = () => {
            init();
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
            if (keepAlive) {
                clearInterval(keepAlive);
            }
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
                ref={canvasRef}
                className="absolute inset-0 w-full h-full"
                style={{ filter: "blur(30px)" }}
            />
        </div>
    );
};
