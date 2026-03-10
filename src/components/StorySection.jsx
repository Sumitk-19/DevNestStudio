"use client";

import { motion } from "framer-motion";

export default function StorySection(){

return(

<section className="section grid md:grid-cols-2 gap-16 items-center">

<motion.div
initial={{opacity:0,x:-50}}
whileInView={{opacity:1,x:0}}
transition={{duration:0.7}}
viewport={{once:true}}
>

<h2 className="text-5xl font-bold leading-tight">

Websites That <span className="gradient-text">Convert Visitors</span> Into Clients

</h2>

<p className="text-gray-400 mt-6">

We design modern, fast, and scalable websites that help businesses
build credibility and attract customers online.

</p>

</motion.div>

<motion.div
initial={{opacity:0,x:50}}
whileInView={{opacity:1,x:0}}
transition={{duration:0.7}}
viewport={{once:true}}
className="glass p-10 rounded-3xl"
>

<h3 className="text-xl font-semibold mb-4">
Modern Tech Stack
</h3>

<p className="text-gray-400">

Next.js • React • Node.js • MongoDB

</p>

</motion.div>

</section>

)
}