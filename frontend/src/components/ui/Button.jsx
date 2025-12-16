export default function Button({ children, variant = "primary", className = "", ...props }) {
const base = "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition-shadow shadow-sm hover:shadow";
const styles = {
primary: "bg-emerald-500 text-white hover:bg-emerald-600",
outline: "border border-emerald-500 text-emerald-700 hover:bg-emerald-50 bg-white",
ghost: "text-emerald-700 hover:bg-emerald-50",
dark: "bg-gray-900 text-white hover:bg-black",
};
return (
<button {...props} className={`${base} ${styles[variant]} ${className}`}>{children}</button>
);
}