import Navbar from "../components/layout/Navbar.jsx";
import Footer from "../components/layout/Footer.jsx";


export default function NotFound() {
return (
<div className="min-h-screen bg-gray-50 text-gray-900">
<Navbar />
<main className="mx-auto max-w-6xl px-4 py-10 md:px-6">
<h1 className="text-2xl font-bold">404 – Page not found</h1>
<p className="mt-2 text-gray-600">The page you are looking for doesn’t exist.</p>
</main>
<Footer />
</div>
);
}