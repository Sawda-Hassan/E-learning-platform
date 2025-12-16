export default function Footer() {
return (
<footer className="mt-16 border-t bg-[#0b1220] text-gray-200">
<div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 md:grid-cols-4 md:px-6">
<div>
<div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500 font-bold text-white">M</div>
<p className="text-sm text-gray-400">Learn. Build. Grow.</p>
</div>
<div>
<h4 className="mb-3 font-semibold">Product</h4>
<ul className="space-y-2 text-sm text-gray-400">
<li>Overview</li>
<li>Courses</li>
<li>Pricing</li>
</ul>
</div>
<div>
<h4 className="mb-3 font-semibold">Company</h4>
<ul className="space-y-2 text-sm text-gray-400">
<li>About</li>
<li>Careers</li>
<li>Blog</li>
</ul>
</div>
<div>
<h4 className="mb-3 font-semibold">Support</h4>
<ul className="space-y-2 text-sm text-gray-400">
<li>Contact</li>
<li>Help Center</li>
<li>Terms</li>
</ul>
</div>
</div>
<div className="border-t border-white/10 py-4 text-center text-xs text-gray-400">© {new Date().getFullYear()} GradUp. All rights reserved.</div>
</footer>
);
}