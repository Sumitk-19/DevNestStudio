"use client";

import { motion } from "framer-motion";
import GradientMesh from "../components/GradientMesh";
import GridBackground from "../components/GridBackground";
import CursorParticles from "../components/CursorParticles";

export default function Hero(){

return(

<section id="home" className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden">

<CursorParticles/>
<GridBackground/>
<GradientMesh/>

<div className="absolute w-[600px] h-[600px] bg-purple-600 blur-[220px] opacity-20 rounded-full"></div>

<motion.h1
initial={{opacity:0,y:60}}
animate={{opacity:1,y:0}}
transition={{duration:1, ease:"easeOut"}}
className="text-6xl font-bold max-w-4xl leading-tight"
>

Build <span className="gradient-text">Digital Products</span> That Grow Businesses

</motion.h1>

<p className="text-gray-400 mt-6 max-w-xl">
Web Development • Apps • Branding • Thumbnails
</p>

<p className="text-green-400 mt-4">
Free Website Consultation Available
</p>

<div className="flex gap-4 mt-8">

<button
onClick={()=>{
const el = document.querySelector("#work");
if(el) el.scrollIntoView({behavior:"smooth"});
}}
className="px-6 py-3 bg-white text-black rounded-xl hover:scale-105 transition"
>
View Work
</button>

<button
onClick={()=>{
const el = document.querySelector("#contact");
if(el) el.scrollIntoView({behavior:"smooth"});
}}
className="px-6 py-3 border border-gray-500 rounded-xl hover:bg-white hover:text-black transition"
>
Start Project
</button>

</div>

</section>

)

}