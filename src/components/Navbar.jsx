"use client";

export default function Navbar(){

return(

<nav className="fixed top-0 w-full z-50 backdrop-blur-lg bg-black/30 border-b border-white/10">

<div className="flex justify-between items-center px-10 py-5">

<h1 className="font-bold text-lg">
DevNest Studio
</h1>

<div className="hidden md:flex gap-8 text-gray-300">

<a href="#services">Services</a>
<a href="#portfolio">Work</a>
<a href="#contact">Contact</a>

</div>

<button className="bg-white text-black px-4 py-2 rounded-xl">
Start Project
</button>

</div>

</nav>

)

}