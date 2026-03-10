"use client";

import { motion } from "framer-motion";
import ParticlesBG from "./ParticlesBG";
import FloatingCards from "./FloatingCards";
import GradientMesh from "./GradientMesh";

export default function Hero(){

return(

<section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden">

<ParticlesBG/>
<FloatingCards/>
<GradientMesh/>

<div className="absolute w-[600px] h-[600px] bg-purple-600 blur-[200px] opacity-30 rounded-full"/>

<motion.h1
initial={{opacity:0,y:50}}
animate={{opacity:1,y:0}}
transition={{duration:0.8}}
whileHover={{scale:1.02}}
className="text-6xl font-bold max-w-4xl leading-tight"
>

Build <span className="gradient-text">Digital Products</span> That Grow Businesses

</motion.h1>

<p className="text-gray-400 mt-6 max-w-xl">

Web Development • Apps • Branding • Thumbnails

</p>

<p className="text-green-400 mt-3">
Free Website Consultation Available
</p>

<div className="flex gap-4 mt-8">

<button className="px-6 py-3 bg-white text-black rounded-xl hover:scale-105 transition">
View Work
</button>

<button className="px-6 py-3 border border-gray-600 rounded-xl hover:scale-105 transition">
Start Project
</button>

</div>

</section>

)

}