"use client";

export default function Navbar(){

return(

<nav className="backdrop-blur-xl bg-black/30 border-b border-white/10">

<div className="flex justify-between items-center px-10 py-5">

<h1 className="font-bold text-lg">
DevNest Studio
</h1>

<div className="hidden md:flex gap-8 text-gray-300">

<a href="#home">Home</a>
<a href="#services">Services</a>
<a href="#work">Work</a>
<a href="#contact">Contact</a>

</div>

<a
href="#contact"
className="px-6 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium hover:scale-105 transition"
>
Start Project
</a>

</div>

</nav>

)

}