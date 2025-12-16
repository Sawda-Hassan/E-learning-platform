import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../../../components/layout/Navbar.jsx";
import Footer from "../../../components/layout/Footer.jsx";
import Card from "../../../components/ui/Card.jsx";
import Badge from "../../../components/ui/Badge.jsx";
import Button from "../../../components/ui/Button.jsx";
import { courses } from "../../../lib/mock.js";

export default function CourseDetail() {
  const { id } = useParams();
  const nav = useNavigate();

  const c = courses.find((x) => x.id === id) || courses[0];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar />
      <main className="mx-auto max-w-5xl px-4 py-8 md:px-6">
        <button
          onClick={() => nav(-1)}
          className="mb-4 text-sm text-emerald-600"
        >
          ← Back to courses
        </button>

        <div className="grid gap-6 md:grid-cols-[1fr_320px]">
          <Card>
            <h1 className="text-2xl font-bold">{c.title}</h1>
            <p className="mt-1 text-sm text-gray-500">
              by {c.teacher} • ★ {c.rating}
            </p>
            <div className="mt-4 aspect-video overflow-hidden rounded-xl bg-gray-100">
              <img src={c.cover} alt="cover" className="h-full w-full object-cover" />
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <Card>
                <h3 className="font-semibold">What you’ll learn</h3>
                <ul className="mt-2 list-inside list-disc text-sm text-gray-600">
                  <li>Build real‑world apps</li>
                  <li>Reusable components</li>
                  <li>State management patterns</li>
                </ul>
              </Card>
              <Card>
                <h3 className="font-semibold">This course includes</h3>
                <ul className="mt-2 list-inside list-disc text-sm text-gray-600">
                  <li>10h on‑demand video</li>
                  <li>Source code downloads</li>
                  <li>Certificate of completion</li>
                </ul>
              </Card>
            </div>
          </Card>

          <div className="space-y-4">
            <Card>
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-bold">{c.price ? `$${c.price}` : "Free"}</h3>
                <Badge>4.8</Badge>
              </div>
              <Button className="mt-4 w-full" onClick={() => nav(`/player/${c.id}`)}>
                Add to cart
              </Button>
              <Button className="mt-2 w-full" variant="outline" onClick={() => nav(`/player/${c.id}`)}>
                Buy now
              </Button>
            </Card>

            <Card>
              <h4 className="mb-2 font-semibold">Course content</h4>
              <ul className="max-h-64 space-y-2 overflow-auto text-sm text-gray-600">
                {Array.from({ length: 10 }).map((_, i) => (
                  <li key={i} className="flex items-center justify-between rounded-lg border p-2">
                    <span>Section {i + 1}: Topic {i + 1}</span>
                    <Badge>9 min</Badge>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
