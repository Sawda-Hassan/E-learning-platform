// src/features/teacher/pages/CourseManagement.jsx
import React, { useState, useEffect } from 'react';
import { getMyCourses, deleteCourse, updateCourse } from '../../../services/courseService';
import CreateCourseForm from '../components/CreateCourseForm';
import VideoUpload from '../components/VideoUpload';

export default function CourseManagement() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeCourse, setActiveCourse] = useState(null);

  const load = async () => {
    setLoading(true);
    try {
      const data = await getMyCourses();
      setCourses(data);
    } catch (err) {
      console.error(err);
      alert('Could not load courses');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); }, []);

  const handleSaved = (newCourse) => {
    // add new course to UI
    setCourses((s) => [newCourse, ...s]);
  };

  const handleDelete = async (id) => {
    if (!confirm('Delete this course?')) return;
    try {
      await deleteCourse(id);
      setCourses((s) => s.filter(c => c._id !== id && c.id !== id));
      if (activeCourse?.id === id || activeCourse?._id === id) setActiveCourse(null);
    } catch (err) {
      console.error(err);
      alert('Delete failed');
    }
  };

  const handleUpdate = async (id, patch) => {
    try {
      const updated = await updateCourse(id, patch);
      setCourses((s) => s.map(c => (c._id === updated._id ? updated : c)));
      if (activeCourse?._id === updated._id) setActiveCourse(updated);
    } catch (err) {
      console.error(err);
      alert('Update failed');
    }
  };

  return (
    <div className="p-4">
      <div className="mb-4">
        <CreateCourseForm onSaved={handleSaved} />
      </div>

      <h3 className="text-lg font-semibold mb-2">Your Courses</h3>
      {loading && <div>Loading...</div>}
      <div className="grid gap-3">
        {courses.map(c => (
          <div key={c._id || c.id} className="p-3 border rounded flex justify-between items-start">
            <div>
              <div className="font-medium">{c.title}</div>
              <div className="text-sm text-slate-600">Lessons: {c.lessons ?? c.videos?.length ?? 0}</div>
              <div className="text-sm text-slate-500">Status: {c.status}</div>
            </div>

            <div className="flex flex-col gap-2 items-end">
              <div className="flex gap-2">
                <button className="px-2 py-1 border rounded" onClick={() => setActiveCourse(c)}>Open</button>
                <button className="px-2 py-1 bg-amber-500 rounded" onClick={() => handleUpdate(c._id || c.id, { status: 'Published' })}>Publish</button>
                <button className="px-2 py-1 border rounded" onClick={() => handleDelete(c._id || c.id)}>Delete</button>
              </div>
              <div className="text-xs text-slate-500">{new Date(c.createdAt || c.created_at || Date.now()).toLocaleString()}</div>
            </div>
          </div>
        ))}
      </div>

      {activeCourse && (
        <div className="mt-6 p-4 border rounded">
          <h4 className="font-semibold">Manage: {activeCourse.title}</h4>
          <div className="mt-3">
            <VideoUpload courseId={activeCourse._id || activeCourse.id} onAdded={() => load()} />
          </div>
          <div className="mt-3">
            <button className="px-3 py-1 border rounded" onClick={() => setActiveCourse(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
