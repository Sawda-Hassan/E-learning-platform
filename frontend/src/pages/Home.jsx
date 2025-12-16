// src/pages/Home.jsx
import Navbar from "../components/layout/Navbar.jsx";
import Footer from "../components/layout/Footer.jsx";
import Button from "../components/ui/Button.jsx";
import Badge from "../components/ui/Badge.jsx";
import Card from "../components/ui/Card.jsx";
import { Link } from "react-router-dom";

import somaliGirl from "../images/somali girl.png";

// ---------- New Images (replace with your actual images)
import figmaClass from "../images/figma-class.jpg";
import shoaibClass from "../images/shoaib-class.jpg";
import uiClass from "../images/ui-class.jpg";
import tutor1 from "../images/tutor1.jpg";
import tutor2 from "../images/tutor2.jpg";
import tutor3 from "../images/tutor3.jpg";
import tutor4 from "../images/tutor4.jpg";

/* ---------- Sections ---------- */

function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-50 to-white p-6 md:p-10">
      <div className="grid items-center gap-8 md:grid-cols-2">
        <div>
          <h1 className="text-3xl font-extrabold leading-tight text-gray-900 md:text-5xl">
            Up Your <span className="text-emerald-600">Skills</span> To Advance Your
            <span className="text-emerald-600"> Career</span> Path
          </h1>
          <p className="mt-3 max-w-xl text-gray-600">
            Learn UI/UX, Frontend, and more from top instructors. Hands-on
            projects, community support, and certificates.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/courses"><Button>Get Started</Button></Link>
            <Link to="/about"><Button variant="outline">Get the tour</Button></Link>
          </div>

          <div className="mt-6 flex items-center gap-4 text-sm text-gray-600">
            <Badge>250+ Collaboration</Badge>
            <span>duolingo</span>
            <span>Codecov</span>
            <span>Magic Leap</span>
          </div>
        </div>

        <div className="relative mx-auto aspect-square w-64 sm:w-80 md:w-full md:max-w-md">
          <div className="absolute -inset-6 rounded-full bg-emerald-500/10" />
          <div className="absolute inset-0 rounded-3xl bg-white p-6 shadow-xl ring-1 ring-black/5">
            <img
              src={somaliGirl}
              alt="Somali Student"
              className="h-full w-full rounded-2xl object-cover object-top"
            />
          </div>
          <div className="absolute -right-4 top-6 rounded-2xl bg-white p-3 shadow ring-1 ring-black/5">
            <p className="text-xs text-gray-500">Students</p>
            <p className="text-lg font-bold text-gray-900">2K+</p>
          </div>
          <div className="absolute -left-4 bottom-6 rounded-2xl bg-white p-3 shadow ring-1 ring-black/5">
            <p className="text-xs text-gray-500">Reviews</p>
            <p className="text-lg font-bold text-gray-900">5K+</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const items = [
    { icon: "💡", title: "Interaction Design", desc: "Boost engagement through smart UX flows." },
    { icon: "🎨", title: "UX Design Course", desc: "Learn UX methods with real projects." },
    { icon: "🧩", title: "Frontend Engineering", desc: "Modern React patterns & best practices." },
  ];

  return (
    <section className="py-10">
      <h2 className="mb-6 text-2xl font-bold text-gray-900">What you’ll get</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it) => (
          <Card key={it.title} className="p-5">
            <div className="text-3xl">{it.icon}</div>
            <h3 className="mt-3 text-lg font-semibold">{it.title}</h3>
            <p className="mt-1 text-sm text-gray-600">{it.desc}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}

/* ---------- New Sections ---------- */

function PopularClasses() {
  const classes = [
    {
      img: figmaClass,
      title: "Figma UI UX Design",
      instructor: "Jane Cooper",
      rating: 4.5,
      reviews: 16325,
      price: "$17.84",
    },
    {
      img: shoaibClass,
      title: "Learn With Shoaib",
      instructor: "Jenny Wilson",
      rating: 3.9,
      reviews: 8321,
      price: "$8.99",
    },
    {
      img: uiClass,
      title: "Building User Interface",
      instructor: "Esther Howard",
      rating: 4.2,
      reviews: 1251,
      price: "$11.70",
    },
  ];

  return (
    <section className="py-10">
      <h2 className="mb-6 text-2xl font-bold text-gray-900">Our Most Popular Class</h2>
      <p className="mb-6 text-gray-600">Let's join our famous classes, the knowledge provided will definitely be useful for you.</p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {classes.map((c) => (
          <Card key={c.title} className="overflow-hidden">
            <img src={c.img} alt={c.title} className="h-40 w-full object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{c.title}</h3>
              <p className="mt-1 text-sm text-gray-500">{c.instructor}</p>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-sm font-bold text-emerald-600">{c.price}</span>
                <span className="text-sm text-gray-500">{c.rating} ⭐ ({c.reviews})</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

function MeetTheHeroes() {
  const heroes = [
    { img: tutor1, name: "Duniyo tahlil", role: "Application Support Analyst", desc: "Former co-founder of Opendoor. Early staff at Spotify and Clearbit." },
    { img: tutor2, name: "Abdirisaq Hassan", role: "Director, Undergraduate Analytics and Planning", desc: "Lead engineering teams at Figma, Pitch, and Protocol Labs." },
    { img: tutor3, name: "Liban Hassan", role: "Career Educator", desc: "Former PM for Linear, Lambda School, and On Deck." },
    { img: tutor4, name: "Aisha Abdulqadir", role: "Co-op & Internships Program & Operations Manager", desc: "Former frontend dev for Linear, Coinbase, and Postscript." },
  ];

  return (
    <section className="py-10">
      <h2 className="mb-6 text-2xl font-bold text-gray-900 text-center">Meet the Heroes</h2>
      <p className="mb-8 text-center text-gray-600">On Weekend UX, instructors from all over the world instruct millions of students. We offer the knowledge and abilities.</p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {heroes.map((h) => (
          <Card key={h.name} className="p-4 text-center">
            <img src={h.img} alt={h.name} className="mx-auto h-24 w-24 rounded-full object-cover" />
            <h3 className="mt-3 font-semibold">{h.name}</h3>
            <p className="text-sm text-emerald-600">{h.role}</p>
            <p className="mt-1 text-sm text-gray-500">{h.desc}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}

/* ---------- Page (default export) ---------- */
export default function Home() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto max-w-6xl space-y-10 px-4 py-8">
        <Hero />
        <Services />
        <PopularClasses />
        <MeetTheHeroes />
      </main>
      <Footer />
    </>
  );
}
