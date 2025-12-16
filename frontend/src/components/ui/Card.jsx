export default function Card({ className = "", children }) {
return <div className={`rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5 ${className}`}>{children}</div>;
}