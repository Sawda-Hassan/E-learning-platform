import Button from "../ui/Button.jsx";
import { Link } from "react-router-dom";
import { useAuthStore } from "../../features/auth/store.js";


export default function Navbar() {
const { user, logout } = useAuthStore();
return (
<header className="sticky top-0 z-40 w-full border-b bg-white/90 backdrop-blur">
<div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
<Link to="/" className="flex items-center gap-3">
<div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500 font-bold text-white">M</div>
<span className="font-semibold">MilGO</span>
</Link>
<nav className="hidden items-center gap-6 md:flex">
<Link to="/" className="text-sm text-gray-700 hover:text-emerald-600">Home</Link>
<Link to="/courses" className="text-sm text-gray-700 hover:text-emerald-600">Courses</Link>
<Link to="/about" className="text-sm text-gray-700 hover:text-emerald-600">About</Link>
<Link to="/contact" className="text-sm text-gray-700 hover:text-emerald-600">Contact</Link>
</nav>
<div className="flex items-center gap-2">
{user ? (
<>
<span className="hidden text-sm text-gray-600 md:inline">Hi, {user.name || "User"}</span>
<Button variant="dark" onClick={logout}>Logout</Button>
</>
) : (
<>
<Link to="/signin" className="text-sm text-emerald-700">Sign in</Link>
<Link to="/signup"><Button>Create free account</Button></Link>
</>
)}
</div>
</div>
</header>
);
}