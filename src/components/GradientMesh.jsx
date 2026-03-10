"use client";

import { motion } from "framer-motion";

export default function GradientMesh() {

return(

<div className="absolute inset-0 -z-10 overflow-hidden">

<motion.div
animate={{
x:[0,100,-100,0],
y:[0,-50,50,0]
}}
transition={{
duration:20,
repeat:Infinity,
ease:"linear"
}}
className="absolute w-[700px] h-[700px] bg-purple-600 rounded-full blur-[180px] opacity-40"
/>

<motion.div
animate={{
x:[0,-120,120,0],
y:[0,80,-80,0]
}}
transition={{
duration:25,
repeat:Infinity,
ease:"linear"
}}
className="absolute right-0 top-40 w-[600px] h-[600px] bg-blue-600 rounded-full blur-[180px] opacity-40"
/>

</div>

)
}