import db from "../config/db.js";

export const selectAll = async () => {
  const [result] = await db.query(
    `SELECT posts.*, autores.nombre, autores.email, autores.imagen
     FROM posts
     JOIN autores ON posts.autor_id = autores.autor_id`
  );
  return result;
};

export const selectById = async (id) => {
  const [result] = await db.query(
    `SELECT posts.*, autores.nombre, autores.email, autores.imagen
     FROM posts
     JOIN autores ON posts.autor_id = autores.autor_id
     WHERE posts.post_id = ?`,
    [id]
  );
  return result[0];
};

export const insert = async ({ titulo, descripcion, categoria, autor_id }) => {
  const [result] = await db.query(
    "INSERT INTO posts (titulo, descripcion, categoria, autor_id) VALUES (?, ?, ?, ?)",
    [titulo, descripcion, categoria, autor_id]
  );
  return result;
};

export const selectByAutor = async (autorId) => {
  const [result] = await db.query(
    `SELECT posts.*, autores.nombre, autores.email, autores.imagen
     FROM posts
     JOIN autores ON posts.autor_id = autores.autor_id
     WHERE posts.autor_id = ?`,
    [autorId]
  );
  return result;
};