const projects=[
{title:"BookNest",desc:"MERN eCommerce platform"},
{title:"Zoom Clone",desc:"Video conferencing app"},
{title:"Expense Tracker",desc:"Finance web application"}
]

export default function Portfolio(){

return(

<section id="portfolio" className="section">

<h2 className="text-4xl font-bold text-center mb-16">
Projects
</h2>

<div className="grid md:grid-cols-3 gap-8">

{projects.map((p,i)=>(
<div key={i} className="glass p-8 rounded-2xl hover:scale-105 transition">

<h3 className="text-2xl font-semibold mb-3">
{p.title}
</h3>

<p className="text-gray-400">
{p.desc}
</p>

</div>
))}

</div>

</section>

)

}