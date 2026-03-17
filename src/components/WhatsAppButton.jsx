"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton(){

return(

<a
href="https://wa.me/+919599661874"
className="fixed bottom-24 right-6 z-50 
bg-green-500 hover:bg-green-600 
p-4 rounded-full shadow-lg hover:scale-110 transition"
>

<FaWhatsapp/>

</a>

)

}