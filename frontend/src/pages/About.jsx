import Navbar from "../components/layout/Navbar.jsx";
import Footer from "../components/layout/Footer.jsx";
import Card from "../components/ui/Card.jsx";


export default function About() {
return (
<div className="min-h-screen bg-gray-50 text-gray-900">
<Navbar />
<main className="mx-auto max-w-6xl px-4 py-10 md:px-6">
<h1 className="text-3xl font-bold">About us</h1>
<div className="mt-6 grid gap-6 md:grid-cols-2">
<Card>
<h3 className="font-semibold">Providing the best opportunities</h3>
<p className="mt-2 text-sm text-gray-600">We deliver features students love: mentorship, projects, and hiring support.</p>
</Card>
<Card>
<h3 className="font-semibold">We are always working</h3>
<p className="mt-2 text-sm text-gray-600">We keep courses fresh and aligned to industry skills.</p>
</Card>
</div>
<div className="mt-6 grid gap-4 md:grid-cols-4">
{["Expert mentors","Job‑ready","Live support","Lifetime access"].map((f)=>(
<Card key={f} className="text-center"><h4 className="font-semibold">{f}</h4></Card>
))}
</div>
</main>
<Footer />
</div>
);
}