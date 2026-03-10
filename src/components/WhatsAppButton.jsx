"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton(){

return(

<a
href="https://wa.me/your-number"
className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full text-white text-2xl shadow-lg"
>

<FaWhatsapp/>

</a>

)

}