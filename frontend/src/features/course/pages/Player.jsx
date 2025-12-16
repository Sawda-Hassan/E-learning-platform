import Navbar from "../../../components/layout/Navbar.jsx";
import Footer from "../../../components/layout/Footer.jsx";
import Card from "../../../components/ui/Card.jsx";
import Button from "../../../components/ui/Button.jsx";
import { useNavigate, useParams } from "react-router-dom";


export default function Player() {
const nav = useNavigate();
const { id } = useParams();
return (
<div className="min-h-screen bg-gray-50 text-gray-900">
<Navbar />
<main className="mx-auto max-w-7xl px-4 py-6 md:px-6">
<div className="mb-3 flex items-center justify-between">
<button onClick={() => nav(-1)} className="text-sm text-emerald-600">← Back</button>
<div className="flex items-center gap-3">
<Button variant="outline">Get certificate</Button>
<Button variant="outline">Share</Button>
</div>
</div>
<div className="grid gap-6 md:grid-cols-[1fr_360px]">
<Card>
<div className="aspect-video w-full rounded-xl bg-black/90 text-white">
<div className="flex h-full items-center justify-center">▶️ Player – {id}</div>
</div>
<div className="mt-3 flex gap-4 text-sm text-gray-600">
<span>Overview</span>
<span>Q&A</span>
<span>Notes</span>
<span>Reviews</span>
</div>
</Card>
<Card>
<h3 className="mb-3 font-semibold">Course content</h3>
<ul className="space-y-2 overflow-auto text-sm">
{Array.from({ length: 12 }).map((_, i) => (
<li key={i} className="flex items-center justify-between rounded-lg border p-2">
<span>{i + 1}. Practice Activity</span>
<span className="text-gray-500">9 min</span>
</li>
))}
</ul>
</Card>
</div>
</main>
<Footer />
</div>
);
}