// src/services/courseService.js
//import api from '../api/'; // axios instance

// Course-related API calls
export const getCourses = () => api.get('/courses').then(r => r.data);
export const getCourseById = (id) => api.get(`/courses/${id}`).then(r => r.data);

export const createCourse = (payload) => api.post('/courses', payload).then(r => r.data);
export const getMyCourses = () => api.get('/courses/mine').then(r => r.data);
export const updateCourse = (id, payload) => api.put(`/courses/${id}`, payload).then(r => r.data);
export const deleteCourse = (id) => api.delete(`/courses/${id}`).then(r => r.data);

// Add video (link or metadata) to a course
export const addCourseVideo = (courseId, videoPayload) =>
  api.post(`/courses/${courseId}/videos`, videoPayload).then(r => r.data);

// Optional: get signed S3 upload URL if backend implements it
export const getSignedUploadUrl = ({ filename, fileType }) =>
  api.post('/uploads/sign-s3', { filename, fileType }).then(r => r.data);
