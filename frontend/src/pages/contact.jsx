import Navbar from "../components/layout/Navbar.jsx";
import Footer from "../components/layout/Footer.jsx";
import Card from "../components/ui/Card.jsx";
import Input from "../components/ui/Input.jsx";
import Button from "../components/ui/Button.jsx";


export default function Contact() {
return (
<div className="min-h-screen bg-gray-50 text-gray-900">
<Navbar />
<main className="mx-auto max-w-5xl px-4 py-10 md:px-6">
<h1 className="mb-6 text-3xl font-bold">Contact us</h1>
<div className="grid gap-6 md:grid-cols-2">
<Card>
<form className="space-y-3" onSubmit={(e)=> e.preventDefault()}>
<div>
<label className="text-sm">Full name</label>
<Input required />
</div>
<div>
<label className="text-sm">Email</label>
<Input type="email" required />
</div>
<div>
<label className="text-sm">Message</label>
<textarea rows={5} className="mt-1 w-full rounded-xl border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
</div>
<Button className="w-full">Send</Button>
</form>
</Card>
<Card>
<h3 className="font-semibold">Head Office</h3>
<p className="mt-2 text-sm text-gray-600">ZUST University, Mogadishu</p>
<div className="mt-4 aspect-video rounded-xl bg-gray-100" />
</Card>
</div>
</main>
<Footer />
</div>
);
}