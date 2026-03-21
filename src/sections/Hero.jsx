"use client";

import { motion } from "framer-motion";
import GradientMesh from "../components/GradientMesh";
import GridBackground from "../components/GridBackground";
import CursorParticles from "../components/CursorParticles";

export default function Hero(){

return(

<section id="home" className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden">

{/* BACKGROUNDS */}

<div className="absolute inset-0 pointer-events-none">
<CursorParticles/>
</div>

<div className="absolute inset-0 pointer-events-none">
<GridBackground/>
</div>

<div className="absolute inset-0 pointer-events-none">
<GradientMesh/>
</div>

<div className="absolute pointer-events-none w-[600px] h-[600px] bg-purple-600 blur-[220px] opacity-20 rounded-full"></div>


{/* CONTENT */}

<div className="relative z-10 flex flex-col items-center">

<motion.h1
initial={{opacity:0,y:60}}
animate={{opacity:1,y:0}}
transition={{duration:1, ease:"easeOut"}}
className="text-6xl font-bold max-w-4xl leading-tight"
>

We <span className="gradient-text">Build Websites</span> That Bring You Customers

</motion.h1>

<p className="text-gray-400 mt-6 max-w-xl">
Website for businesses
</p>

<p className="text-green-400 mt-4">
We’ll personally review your business and suggest improvements (FREE)
</p>

<p className="text-green-400 mt-4">
 Website starting at ₹4,999 | Delivery in 2–3 days
</p>

<div className="flex gap-4 mt-8">

<a
href="#work"
className="px-6 py-3 bg-white text-black rounded-xl hover:scale-105 transition duration-300"
>
View Work
</a>

<a
href="#contact"
className="px-6 py-3 border border-gray-500 rounded-xl hover:bg-white hover:text-black transition duration-300"
>
Get Free Website Audit
</a>

</div>

</div>

</section>

)

}