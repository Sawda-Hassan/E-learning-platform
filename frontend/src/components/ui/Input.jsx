export default function Input(props) {
return (
<input
{...props}
className={`w-full rounded-xl border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 ${props.className || ""}`}
/>
);
}