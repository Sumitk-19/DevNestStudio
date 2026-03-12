"use client";

import { motion } from "framer-motion";

export default function GridBackground() {

return(

<div className="absolute inset-0 -z-10 opacity-8">

<motion.div
animate={{y:[0,40,0]}}
transition={{duration:8,repeat:Infinity,ease:"linear"}}
className="w-full h-full bg-[linear-gradient(#ffffff12_1px,transparent_1px),linear-gradient(90deg,#ffffff08_1px,transparent_1px)] bg-[size:60px_60px]"
/>

</div>

)

}