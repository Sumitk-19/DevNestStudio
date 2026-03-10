export default function Contact(){

return(

<section id="contact" className="section">

<h2 className="text-4xl font-bold text-center mb-12">
Contact
</h2>

<form className="max-w-xl mx-auto space-y-4">

<input type="text" placeholder="Name" className="w-full p-3 rounded bg-black border border-gray-700"/>

<input type="email" placeholder="Email" className="w-full p-3 rounded bg-black border border-gray-700"/>

<textarea placeholder="Project Details" className="w-full p-3 rounded bg-black border border-gray-700"/>

<button className="bg-white text-black px-6 py-3 rounded w-full">
Send Message
</button>

</form>

</section>

)

}