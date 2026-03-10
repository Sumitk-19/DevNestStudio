"use client";

import { motion } from "framer-motion";

export default function FloatingCards(){

return(

<div className="absolute top-32 right-10 hidden lg:block">

<motion.div
animate={{ y:[0,-20,0] }}
transition={{ duration:6, repeat:Infinity }}
className="glass p-6 rounded-2xl w-64 shadow-2xl"
>

<p className="text-xs text-gray-400 mb-2">
Recent Project
</p>

<h3 className="font-semibold text-lg">
Business Website
</h3>

<p className="text-gray-400 text-sm">
React • Next.js • Node
</p>

</motion.div>

</div>

)

}