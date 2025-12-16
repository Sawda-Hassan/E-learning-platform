// src/features/teacher/components/VideoUpload.jsx
import React, { useState } from 'react';
import { addCourseVideo, getSignedUploadUrl } from '../../../services/courseService';
import api from '../../../api/api.js'; // axios instance

export default function VideoUpload({ courseId, onAdded }) {
  const [url, setUrl] = useState('');
  const [file, setFile] = useState(null);
  const [busy, setBusy] = useState(false);

  const addLink = async () => {
    if (!url) return alert('Paste a video URL first');
    setBusy(true);
    try {
      const payload = { provider: 'link', url };
      const updated = await addCourseVideo(courseId, payload);
      onAdded?.(updated);
      setUrl('');
    } catch (err) {
      console.error(err);
      alert(err?.response?.data?.message || 'Could not add video');
    } finally {
      setBusy(false);
    }
  };

  // optional file upload flow using signed URL from backend
  const uploadFile = async () => {
    if (!file) return alert('Pick a file first');
    setBusy(true);
    try {
      // 1) ask backend for signed URL (if available)
      const { signedUrl, key } = await getSignedUploadUrl({ filename: file.name, fileType: file.type });
      // 2) upload to signedUrl (S3 PUT)
      await api.put(signedUrl, file, {
        headers: { 'Content-Type': file.type },
        // NOTE: axios won't work uploading directly to some signed URLs due to CORS; you may need to use fetch
      });
      // 3) notify backend to attach video metadata
      const fileUrl = `${process.env.REACT_APP_CLOUDFRONT_OR_S3_BASE}/${key}`; // keep in sync with backend
      await addCourseVideo(courseId, { provider: 's3', url: fileUrl, storageKey: key });
      onAdded?.(true);
      setFile(null);
    } catch (err) {
      console.error(err);
      alert(err?.response?.data?.message || 'Upload failed');
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="p-3 border rounded space-y-2">
      <div className="flex gap-2">
        <input value={url} onChange={e=>setUrl(e.target.value)} placeholder="YouTube / Vimeo / MP4 URL" className="flex-1 p-2 border rounded" />
        <button className="px-3 py-1 bg-emerald-600 text-white rounded" onClick={addLink} disabled={busy}>
          {busy ? 'Adding...' : 'Add Link'}
        </button>
      </div>

      <div className="flex items-center gap-2">
        <input type="file" accept="video/*" onChange={e=>setFile(e.target.files[0])} />
        <button className="px-3 py-1 border rounded" onClick={uploadFile} disabled={busy}>
          {busy ? 'Uploading...' : 'Upload File'}
        </button>
      </div>
    </div>
  );
}
