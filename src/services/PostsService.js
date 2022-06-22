import createHttp from "./BaseService";

const http = createHttp(true);

export const createPost = (data) => http.post("/posts", data);

export const getPost = (id) => http.get(`/posts/${id}`);

export const updatePost = (id, data) => http.patch(`/posts/${id}`, data);

export const deletePost = (id) => http.delete(`/posts/${id}`);