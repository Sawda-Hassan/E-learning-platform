import Card from "../../../components/ui/Card.jsx";
import Badge from "../../../components/ui/Badge.jsx";
import Button from "../../../components/ui/Button.jsx";
import { Link } from "react-router-dom";


export default function CourseCard({ course }) {
return (
<Card className="flex flex-col">
<div className="aspect-video w-full overflow-hidden rounded-xl bg-gray-100">
<img src={course.cover} alt="cover" className="h-full w-full object-cover" />
</div>
<div className="mt-3 flex-1">
<div className="mb-1 flex items-center justify-between">
<Badge>{course.level}</Badge>
<span className="text-xs text-gray-500">★ {course.rating}</span>
</div>
<h3 className="font-semibold leading-snug">{course.title}</h3>
<p className="mt-1 text-sm text-gray-500">{course.teacher}</p>
</div>
<div className="mt-4 flex items-center justify-between">
<span className="text-sm font-semibold text-emerald-600">{course.price ? `$${course.price}` : "Free"}</span>
<Link to={`/courses/${course.id}`}><Button variant="outline">View</Button></Link>
</div>
</Card>
);
}