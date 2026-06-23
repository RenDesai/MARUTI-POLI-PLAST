import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';


function ParticleCloud(props) {
    const ref = useRef();
    // Generate 5000 particles in a sphere
    const sphere = useMemo(() => {
        // We cannot easily import maath without installing it. 
        // Fallback: simple random sphere generation
        const positions = new Float32Array(5000 * 3);
        for (let i = 0; i < 5000; i++) {
            const r = 2.5 * Math.cbrt(Math.random());
            const theta = Math.random() * 2 * Math.PI;
            const phi = Math.acos(2 * Math.random() - 1);
            positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
            positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
            positions[i * 3 + 2] = r * Math.cos(phi);
        }
        return positions;
    }, []);

    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial transparent color="#8a9ab0" size={0.01} sizeAttenuation={true} depthWrite={false} />
            </Points>
        </group>
    );
}

export default function ThreeBackground() {
    return (
        <div className="absolute inset-0 z-0 bg-transparent pointer-events-none">
            <Canvas camera={{ position: [0, 0, 1] }}>
                <ParticleCloud />
            </Canvas>
        </div>
    );
}
