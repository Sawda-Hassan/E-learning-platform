import Navbar from "../../../components/layout/Navbar.jsx";
import Footer from "../../../components/layout/Footer.jsx";
import Input from "../../../components/ui/Input.jsx";

import CourseCard from "../component/CourseCard.jsx";
import { courses } from "../../../lib/mock.js";
import { useMemo, useState } from "react";


export default function Courses() {
const [query, setQuery] = useState("");
const [category, setCategory] = useState("All");
const [level, setLevel] = useState("All");


const filtered = useMemo(() => {
return courses.filter((c) => {
const q = c.title.toLowerCase().includes(query.toLowerCase());
const cat = category === "All" || c.category === category;
const lvl = level === "All" || c.level === level;
return q && cat && lvl;
});
}, [query, category, level]);


return (
<div className="min-h-screen bg-gray-50 text-gray-900">
<Navbar />
<main className="mx-auto max-w-7xl px-4 py-8 md:px-6">
<h1 className="mb-6 text-3xl font-bold">Courses</h1>
<div className="mb-4 flex flex-wrap items-center gap-3">
<Input placeholder="Search courses" value={query} onChange={(e) => setQuery(e.target.value)} />
<select value={category} onChange={(e) => setCategory(e.target.value)} className="rounded-xl border px-3 py-2 text-sm">
{["All", "Frontend", "Design", "CS"].map((o) => (
<option key={o}>{o}</option>
))}
</select>
<select value={level} onChange={(e) => setLevel(e.target.value)} className="rounded-xl border px-3 py-2 text-sm">
{["All", "Beginner", "Intermediate", "Advanced"].map((o) => (
<option key={o}>{o}</option>
))}
</select>
</div>
<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
{filtered.map((c) => (
<CourseCard key={c.id} course={c} />
))}
</div>
</main>
<Footer />
</div>
);
}