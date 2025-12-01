"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export const HeroAnimation = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // Scene setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            containerRef.current.clientWidth / containerRef.current.clientHeight,
            0.1,
            1000
        );
        camera.position.set(0, 0, 8);

        const renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: true
        });
        renderer.setSize(
            containerRef.current.clientWidth,
            containerRef.current.clientHeight
        );
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        containerRef.current.appendChild(renderer.domElement);

        // Flow field function for organic movement - defined early for use throughout
        const flowField = (x: number, y: number, z: number, time: number): { x: number; y: number; z: number } => {
            const angle = (x + y + z) * 0.2 + time * 0.8;
            const strength = 0.5; // Increased strength for more visible movement
            return {
                x: Math.cos(angle) * strength,
                y: Math.sin(angle * 1.3) * strength,
                z: Math.cos(angle * 0.7) * strength,
            };
        };

        // Create integration nodes (representing different systems/APIs)
        const nodes: { 
            mesh: THREE.Mesh; 
            basePos: THREE.Vector3; 
            angle: number;
            flowAngle: number;
            flowSpeed: number;
            ring: THREE.Mesh;
        }[] = [];
        const nodePositions = [
            new THREE.Vector3(-3, 2, 0),
            new THREE.Vector3(3, 2, 0),
            new THREE.Vector3(-3, -2, 0),
            new THREE.Vector3(3, -2, 0),
            new THREE.Vector3(0, 0, 0), // Central hub
        ];

        const nodeGeometry = new THREE.SphereGeometry(0.3, 32, 32);
        const nodeMaterials = [
            new THREE.MeshPhongMaterial({
                color: 0xa03291,
                emissive: 0xa03291,
                emissiveIntensity: 0.5,
                shininess: 100
            }),
            new THREE.MeshPhongMaterial({
                color: 0x4b4fe2,
                emissive: 0x4b4fe2,
                emissiveIntensity: 0.5,
                shininess: 100
            }),
            new THREE.MeshPhongMaterial({
                color: 0x6366f1,
                emissive: 0x6366f1,
                emissiveIntensity: 0.5,
                shininess: 100
            }),
            new THREE.MeshPhongMaterial({
                color: 0x9333ea,
                emissive: 0x9333ea,
                emissiveIntensity: 0.5,
                shininess: 100
            }),
            new THREE.MeshPhongMaterial({
                color: 0xa03291,
                emissive: 0xa03291,
                emissiveIntensity: 0.8,
                shininess: 100
            }),
        ];

        nodePositions.forEach((pos, i) => {
            const node = new THREE.Mesh(nodeGeometry, nodeMaterials[i]);
            node.position.copy(pos);
            
            // Add glow ring around each node
            const ringGeometry = new THREE.RingGeometry(0.4, 0.5, 32);
            const ringMaterial = new THREE.MeshBasicMaterial({
                color: nodeMaterials[i].color,
                transparent: true,
                opacity: 0.4,
                side: THREE.DoubleSide
            });
            const ring = new THREE.Mesh(ringGeometry, ringMaterial);
            ring.position.copy(pos);
            scene.add(ring);
            
            nodes.push({
                mesh: node,
                basePos: pos.clone(),
                angle: Math.random() * Math.PI * 2,
                flowAngle: Math.random() * Math.PI * 2,
                flowSpeed: 0.3 + Math.random() * 0.4,
                ring: ring
            });
            scene.add(node);
        });

        // Create connection lines between nodes - using curved paths for flow
        const connectionPairs = [
            [0, 4], // Left top to center
            [1, 4], // Right top to center
            [2, 4], // Left bottom to center
            [3, 4], // Right bottom to center
        ];

        // Create curved connection lines using CatmullRomCurve3
        const connections: { 
            curve: THREE.CatmullRomCurve3; 
            line: THREE.Line; 
            points: THREE.Vector3[];
            flowPhase: number;
        }[] = [];
        
        connectionPairs.forEach(([start, end], index) => {
            const startPos = nodePositions[start];
            const endPos = nodePositions[end];
            
            // Create control points for curved path
            const midPoint = new THREE.Vector3().lerpVectors(startPos, endPos, 0.5);
            const perpendicular = new THREE.Vector3(
                -(endPos.y - startPos.y),
                endPos.x - startPos.x,
                0
            ).normalize().multiplyScalar(1.5 + Math.sin(index) * 0.5);
            
            const controlPoint1 = midPoint.clone().add(perpendicular);
            const controlPoint2 = midPoint.clone().sub(perpendicular);
            
            // Create curved path
            const curve = new THREE.CatmullRomCurve3([
                startPos,
                controlPoint1,
                controlPoint2,
                endPos
            ]);
            
            const points = curve.getPoints(50);
            const geometry = new THREE.BufferGeometry().setFromPoints(points);
            const material = new THREE.LineBasicMaterial({
                color: 0xa03291,
                transparent: true,
                opacity: 0.6,
                linewidth: 2
            });
            const line = new THREE.Line(geometry, material);
            scene.add(line);
            
            connections.push({
                curve: curve,
                line: line,
                points: points,
                flowPhase: Math.random() * Math.PI * 2
            });
        });

        // Create MORE data packets (small spheres traveling along connections)
        interface DataPacket {
            mesh: THREE.Mesh;
            startNode: number;
            endNode: number;
            progress: number;
            speed: number;
        }

        const dataPackets: DataPacket[] = [];
        const packetGeometry = new THREE.SphereGeometry(0.12, 16, 16);

        // Create 3 packets per connection for more activity
        connectionPairs.forEach(([start, end]) => {
            for (let i = 0; i < 3; i++) {
                const packetMaterial = new THREE.MeshPhongMaterial({
                    color: 0x4b4fe2,
                    emissive: 0x4b4fe2,
                    emissiveIntensity: 1.0,
                    transparent: true,
                    opacity: 0.9
                });
                const packet = new THREE.Mesh(packetGeometry, packetMaterial);
                scene.add(packet);
                dataPackets.push({
                    mesh: packet,
                    startNode: start,
                    endNode: end,
                    progress: i * 0.33, // Stagger them
                    speed: 0.4 + Math.random() * 0.3
                });
            }
        });

        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
        scene.add(ambientLight);

        const pointLight1 = new THREE.PointLight(0xa03291, 3, 30);
        scene.add(pointLight1);

        const pointLight2 = new THREE.PointLight(0x4b4fe2, 3, 30);
        scene.add(pointLight2);

        const pointLight3 = new THREE.PointLight(0x6366f1, 2, 25);
        scene.add(pointLight3);

        // Animation loop
        let frameId: number;
        const clock = new THREE.Clock();

        const animate = () => {
            frameId = requestAnimationFrame(animate);
            const elapsedTime = clock.getElapsedTime();
            const deltaTime = clock.getDelta();

            // CAMERA ROTATION - Smooth flowing cinematic movement - more dynamic
            const cameraFlow = flowField(0, 0, 0, elapsedTime * 0.4);
            camera.position.x = Math.sin(elapsedTime * 0.2) * 3 + cameraFlow.x * 0.8;
            camera.position.y = Math.cos(elapsedTime * 0.18) * 2.5 + cameraFlow.y * 0.8;
            camera.position.z = 8 + Math.sin(elapsedTime * 0.15) * 0.8 + cameraFlow.z * 0.5;
            camera.lookAt(cameraFlow.x * 0.5, cameraFlow.y * 0.5, cameraFlow.z * 0.3);

            // DYNAMIC node movement with flowing patterns
            nodes.forEach((nodeData, index) => {
                if (index < 4) { // Only outer nodes float
                    // Update flow angle for organic movement
                    nodeData.flowAngle += deltaTime * nodeData.flowSpeed;
                    nodeData.angle += deltaTime * (0.6 + Math.sin(nodeData.flowAngle) * 0.3);
                    
                    // Create flowing, organic movement pattern with more visible movement
                    const flowOffset = flowField(
                        nodeData.basePos.x, 
                        nodeData.basePos.y, 
                        nodeData.basePos.z, 
                        elapsedTime
                    );
                    
                    const circularOffset = new THREE.Vector3(
                        Math.sin(nodeData.angle) * 0.6,
                        Math.cos(nodeData.angle * 1.3) * 0.6,
                        Math.sin(nodeData.angle * 0.7) * 0.4
                    );
                    
                    // Combine circular and flow movements
                    const flowVector = new THREE.Vector3(
                        flowOffset.x * 0.8,
                        flowOffset.y * 0.8,
                        flowOffset.z * 0.5
                    );
                    const offset = circularOffset.add(flowVector);
                    
                    nodeData.mesh.position.copy(nodeData.basePos).add(offset);
                    nodeData.ring.position.copy(nodeData.mesh.position);
                } else {
                    // Central hub has more visible flow movement
                    const flowOffset = flowField(0, 0, 0, elapsedTime);
                    nodeData.mesh.position.set(
                        flowOffset.x * 0.5,
                        flowOffset.y * 0.5,
                        flowOffset.z * 0.3
                    );
                    nodeData.ring.position.copy(nodeData.mesh.position);
                }

                // Pulse all nodes with flowing rhythm - more visible
                const pulsePhase = elapsedTime * 3 + index * 0.5;
                const scale = 1 + Math.sin(pulsePhase) * 0.25 + Math.cos(pulsePhase * 1.3) * 0.15;
                nodeData.mesh.scale.set(scale, scale, scale);
                nodeData.ring.scale.set(scale * 1.2, scale * 1.2, 1);

                // Rotate nodes with varying speeds for flow - more dynamic
                nodeData.mesh.rotation.x += deltaTime * (0.5 + Math.sin(elapsedTime + index) * 0.4);
                nodeData.mesh.rotation.y += deltaTime * (0.8 + Math.cos(elapsedTime + index) * 0.5);
                nodeData.ring.rotation.z += deltaTime * 0.4;
            });

            // Update curved connection lines dynamically with flow
            connections.forEach((conn, index) => {
                const [start, end] = connectionPairs[index];
                
                // Update control points based on node positions and flow
                const startPos = nodes[start].mesh.position;
                const endPos = nodes[end].mesh.position;
                const midPoint = new THREE.Vector3().lerpVectors(startPos, endPos, 0.5);
                
                // Add flow-based curvature with more dynamic movement
                const flow = flowField(midPoint.x, midPoint.y, midPoint.z, elapsedTime + conn.flowPhase);
                const perpendicular = new THREE.Vector3(
                    -(endPos.y - startPos.y),
                    endPos.x - startPos.x,
                    0
                );
                
                // Ensure perpendicular is not zero vector
                if (perpendicular.length() > 0.001) {
                    perpendicular.normalize();
                } else {
                    perpendicular.set(1, 0, 0);
                }
                
                const curveAmount = 1.5 + Math.sin(elapsedTime * 0.8 + index) * 0.8;
                perpendicular.multiplyScalar(curveAmount);
                
                const controlPoint1 = midPoint.clone().add(perpendicular).add(
                    new THREE.Vector3(flow.x, flow.y, flow.z).multiplyScalar(1.2)
                );
                const controlPoint2 = midPoint.clone().sub(perpendicular).add(
                    new THREE.Vector3(flow.x, flow.y, flow.z).multiplyScalar(1.2)
                );
                
                // Update curve
                conn.curve = new THREE.CatmullRomCurve3([
                    startPos,
                    controlPoint1,
                    controlPoint2,
                    endPos
                ]);
                
                // Get new points and update geometry properly
                const points = conn.curve.getPoints(50);
                
                // Update geometry positions directly for better performance
                const positions = conn.line.geometry.attributes.position;
                if (positions && positions.count === points.length) {
                    for (let i = 0; i < points.length; i++) {
                        positions.setXYZ(i, points[i].x, points[i].y, points[i].z);
                    }
                    positions.needsUpdate = true;
                } else {
                    // If geometry size changed, recreate it
                    conn.line.geometry.dispose();
                    const newGeometry = new THREE.BufferGeometry().setFromPoints(points);
                    conn.line.geometry = newGeometry;
                }

                // Pulse line opacity with flow
                const opacityPhase = elapsedTime * 2 + conn.flowPhase;
                (conn.line.material as THREE.LineBasicMaterial).opacity = 
                    0.4 + Math.sin(opacityPhase) * 0.4 + Math.cos(opacityPhase * 1.7) * 0.15;
            });

            // ANIMATE data packets along curved paths with flow
            dataPackets.forEach((packet, index) => {
                packet.progress += deltaTime * packet.speed;

                if (packet.progress >= 1) {
                    packet.progress = 0;
                }

                // Find the connection this packet belongs to
                const connectionIndex = Math.floor(index / 3);
                const conn = connections[connectionIndex];
                
                if (conn && conn.curve) {
                    // Move along curved path
                    const pointOnCurve = conn.curve.getPoint(packet.progress);
                    packet.mesh.position.copy(pointOnCurve);
                    
                    // Add perpendicular flow for more organic movement
                    try {
                        const tangent = conn.curve.getTangent(packet.progress);
                        const flow = flowField(pointOnCurve.x, pointOnCurve.y, pointOnCurve.z, elapsedTime);
                        const up = new THREE.Vector3(0, 0, 1);
                        const perpendicularFlow = new THREE.Vector3().crossVectors(tangent, up);
                        if (perpendicularFlow.length() > 0.001) {
                            perpendicularFlow.normalize().multiplyScalar(flow.x * 0.3);
                            packet.mesh.position.add(perpendicularFlow);
                        }
                    } catch (e) {
                        // If tangent calculation fails, just use the curve point
                    }
                } else {
                    // Fallback to linear interpolation
                    const startPos = nodes[packet.startNode].mesh.position;
                    const endPos = nodes[packet.endNode].mesh.position;
                    packet.mesh.position.lerpVectors(startPos, endPos, packet.progress);
                }

                // Flowing pulse with wave effect - more visible
                const pulsePhase = packet.progress * Math.PI * 2;
                const pulseScale = 1.4 + Math.sin(pulsePhase) * 0.7 + Math.cos(pulsePhase * 2) * 0.3;
                packet.mesh.scale.set(pulseScale, pulseScale, pulseScale);

                // Opacity pulse with flow - more dynamic
                (packet.mesh.material as THREE.MeshPhongMaterial).opacity = 
                    0.7 + Math.sin(pulsePhase) * 0.3 + Math.cos(pulsePhase * 1.5) * 0.15;
            });

            // DYNAMIC LIGHTS - Moving in flowing patterns
            const light1Flow = flowField(6, 4, 5, elapsedTime * 0.4);
            pointLight1.position.x = Math.cos(elapsedTime * 0.5) * 6 + light1Flow.x;
            pointLight1.position.y = Math.sin(elapsedTime * 0.4) * 4 + light1Flow.y;
            pointLight1.position.z = Math.sin(elapsedTime * 0.3) * 5 + light1Flow.z;
            pointLight1.intensity = 3 + Math.sin(elapsedTime * 0.7) * 0.5;

            const light2Flow = flowField(-6, -4, 5, elapsedTime * 0.5);
            pointLight2.position.x = Math.cos(elapsedTime * 0.4 + Math.PI) * 6 + light2Flow.x;
            pointLight2.position.y = Math.sin(elapsedTime * 0.6 + Math.PI) * 4 + light2Flow.y;
            pointLight2.position.z = Math.cos(elapsedTime * 0.35) * 5 + light2Flow.z;
            pointLight2.intensity = 3 + Math.cos(elapsedTime * 0.8) * 0.5;

            const light3Flow = flowField(5, 3, 4, elapsedTime * 0.6);
            pointLight3.position.x = Math.sin(elapsedTime * 0.5) * 5 + light3Flow.x;
            pointLight3.position.y = Math.cos(elapsedTime * 0.35) * 3 + light3Flow.y;
            pointLight3.position.z = Math.sin(elapsedTime * 0.7) * 4 + light3Flow.z;
            pointLight3.intensity = 2 + Math.sin(elapsedTime * 0.6) * 0.4;

            renderer.render(scene, camera);
        };

        animate();

        // Handle resize
        const handleResize = () => {
            if (!containerRef.current) return;

            camera.aspect =
                containerRef.current.clientWidth / containerRef.current.clientHeight;
            camera.updateProjectionMatrix();

            renderer.setSize(
                containerRef.current.clientWidth,
                containerRef.current.clientHeight
            );
        };

        window.addEventListener("resize", handleResize);

        // Cleanup
        return () => {
            window.removeEventListener("resize", handleResize);
            cancelAnimationFrame(frameId);

            if (containerRef.current && renderer.domElement.parentElement === containerRef.current) {
                containerRef.current.removeChild(renderer.domElement);
            }

            renderer.dispose();
            nodeGeometry.dispose();
            nodeMaterials.forEach(mat => mat.dispose());
            packetGeometry.dispose();
            dataPackets.forEach(packet => {
                (packet.mesh.material as THREE.Material).dispose();
            });
            connections.forEach(conn => {
                if (conn.line) {
                    conn.line.geometry.dispose();
                    if (conn.line.material instanceof THREE.Material) {
                        conn.line.material.dispose();
                    }
                }
            });
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="w-full h-full relative"
            style={{
                minHeight: "400px",
                maxWidth: "100%",
                overflow: "hidden"
            }}
        />
    );
};
