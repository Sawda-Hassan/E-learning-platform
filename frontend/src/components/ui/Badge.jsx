export default function Badge({ children }) {
return (
<span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-700">
{children}
</span>
);
}