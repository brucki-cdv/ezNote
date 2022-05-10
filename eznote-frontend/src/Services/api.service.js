import axios from "axios";

const DATABASE_URL = "http://localhost:8000/api/v1";

const getNotebooks = () => {
  return axios.get(DATABASE_URL + "/notebook");
};

const getTags = () => {
  return axios.get(DATABASE_URL + "/tag");
};

const getNotes = (limit = 6, page = 1, search = "", sort = 1) => {
  return axios.get(
    DATABASE_URL +
      "/note?" +
      "limit=" +
      limit +
      "&page=" +
      page +
      "&search=" +
      search +
      "&sort=" +
      sort
  );
};

const getNotesByStatus = (limit = 6, page = 1, status, search, sort = 1) => {
  return axios.get(
    DATABASE_URL +
      "/note?" +
      "limit=" +
      limit +
      "&page=" +
      page +
      "&search=" +
      search +
      "&status=" +
      status +
      "&sort=" +
      sort
  );
};

const getNotesByTag = (limit = 6, page = 1, tag, search, sort = 1) => {
  return axios.get(
    DATABASE_URL +
      "/note?" +
      "limit=" +
      limit +
      "&page=" +
      page +
      "&search=" +
      search +
      "&tag=" +
      tag +
      "&sort=" +
      sort
  );
};

const getNotesByNotebook = (
  limit = 6,
  page = 1,
  notebook,
  search,
  sort = 1
) => {
  return axios.get(
    DATABASE_URL +
      "/note?" +
      "limit=" +
      limit +
      "&page=" +
      page +
      "&search=" +
      search +
      "&notebook=" +
      notebook +
      "&sort=" +
      sort
  );
};

const getNote = (id) => {
  return axios.get(DATABASE_URL + "/note/" + id);
};

const createNotebook = (createdBy, notebookName) => {
  return axios.post(DATABASE_URL + "/notebook", {
    name: notebookName,
    createdBy: createdBy,
  });
};

const createNote = (data) => {
  return axios.post(DATABASE_URL + "/note", data);
};

const createTag = (data) => {
  return axios.post(DATABASE_URL + "/tag", data);
};

const updateNote = (id, data) => {
  return axios.patch(DATABASE_URL + "/note/" + id, data);
};

const updateNoteTag = (id, tag) => {
  return axios.patch(DATABASE_URL + "/note/tag/" + id, { tag: tag });
};

const updateNotebook = (data) => {
  return axios.patch(DATABASE_URL + "/notebook", data);
};

const deleteNote = (id) => {
  return axios.delete(DATABASE_URL + "/note/" + id);
};

const deleteNotebook = (id) => {
  return axios.delete(DATABASE_URL + "/notebook/" + id);
};

const deleteTag = (id, tag) => {
  return axios.patch(DATABASE_URL + "/note/tag?noteId=" + id + "&tagId=" + tag);
};

export default {
  getNotebooks,
  getTags,
  getNotes,
  getNotesByNotebook,
  getNotesByTag,
  getNotesByStatus,
  getNote,
  createNotebook,
  createNote,
  createTag,
  updateNote,
  updateNoteTag,
  updateNotebook,
  deleteNote,
  deleteNotebook,
  deleteTag,
};
