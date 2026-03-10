"use client";

import { motion } from "framer-motion";

const services=[
{
title:"Website Development",
desc:"Modern scalable websites built with Next.js"
},
{
title:"App Development",
desc:"Full stack apps for startups"
},
{
title:"Logo Design",
desc:"Professional brand identities"
},
{
title:"Thumbnail Design",
desc:"High CTR YouTube thumbnails"
}
]

export default function Services(){

return(

<section id="services" className="section">

<h2 className="text-4xl font-bold text-center mb-16">
Services
</h2>

<div className="grid md:grid-cols-4 gap-8">

{services.map((s,i)=>(

<motion.div
key={i}
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.6,delay:i*0.1}}
viewport={{once:true}}
className="glass p-8 rounded-2xl hover:scale-105 transition"
>

<h3 className="text-xl font-semibold mb-3">
{s.title}
</h3>

<p className="text-gray-400">
{s.desc}
</p>

</motion.div>

))}

</div>

</section>

)

}