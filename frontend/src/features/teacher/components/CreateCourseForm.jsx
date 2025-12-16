// src/features/teacher/components/CreateCourseForm.jsx
import React, { useState } from 'react';
import { createCourse } from '../../../services/courseService';

export default function CreateCourseForm({ onSaved }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [level, setLevel] = useState('Beginner');
  const [loading, setLoading] = useState(false);

  const save = async () => {
    if (!title) return alert('Title required');
    setLoading(true);
    try {
      const payload = { title, description, level };
      const saved = await createCourse(payload);
      onSaved?.(saved);
      setTitle('');
      setDescription('');
      setLevel('Beginner');
    } catch (err) {
      console.error(err);
      alert(err?.response?.data?.message || 'Save failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 border rounded">
      <h4 className="font-semibold mb-2">Create Course</h4>
      <input value={title} onChange={e=>setTitle(e.target.value)} placeholder="Course title" className="w-full p-2 border rounded mb-2" />
      <textarea value={description} onChange={e=>setDescription(e.target.value)} placeholder="Short description" className="w-full p-2 border rounded mb-2" />
      <select value={level} onChange={e=>setLevel(e.target.value)} className="p-2 border rounded mb-3">
        <option>Beginner</option>
        <option>Intermediate</option>
        <option>Advanced</option>
      </select>
      <div className="flex gap-2">
        <button onClick={save} className="px-3 py-1 bg-sky-600 text-white rounded" disabled={loading}>
          {loading ? 'Saving...' : 'Save'}
        </button>
      </div>
    </div>
  );
}
