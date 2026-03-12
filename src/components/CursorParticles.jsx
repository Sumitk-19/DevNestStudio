"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function Particles({ mouse }) {

const mesh = useRef();

const count = 700;
const positions = new Float32Array(count * 3);

for (let i = 0; i < count; i++) {

positions[i * 3] = (Math.random() - 0.5) * 20;
positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
positions[i * 3 + 2] = (Math.random() - 0.5) * 10;

}

useFrame(() => {

mesh.current.rotation.y += 0.0008;

mesh.current.position.x = mouse.current.x * 0.5;
mesh.current.position.y = mouse.current.y * 0.5;

});

return (

<points ref={mesh}>

<bufferGeometry>
<bufferAttribute
attach="attributes-position"
count={positions.length / 3}
array={positions}
itemSize={3}
/>
</bufferGeometry>

<pointsMaterial size={0.04} color="#8b5cf6" />

</points>

);

}

export default function CursorParticles() {

const mouse = useRef({ x: 0, y: 0 });

const handleMouseMove = (e) => {

mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
mouse.current.y = -(e.clientY / window.innerHeight - 0.5) * 2;

};

return (

<div
onMouseMove={handleMouseMove}
className="absolute inset-0 -z-10"
>

<Canvas camera={{ position: [0, 0, 8] }}>
<ambientLight intensity={1} />
<Particles mouse={mouse} />
</Canvas>

</div>

);

}