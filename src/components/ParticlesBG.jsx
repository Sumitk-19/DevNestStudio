"use client";

import Particles from "react-tsparticles";

export default function ParticlesBG(){

return(

<Particles
className="absolute inset-0 -z-10"
options={{
particles:{
number:{value:40},
size:{value:2},
move:{enable:true,speed:1},
opacity:{value:0.3}
}
}}
/>

)

}