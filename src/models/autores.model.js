import db from "../config/db.js";

export const selectAll = async () => {
  const [result] = await db.query("SELECT * FROM autores");
  return result;
};

export const selectById = async (id) => {
  const [result] = await db.query("SELECT * FROM autores WHERE autor_id = ?", [id]);
  return result[0];
};

export const insert = async ({ nombre, email, imagen }) => {
  const [result] = await db.query(
    "INSERT INTO autores (nombre, email, imagen) VALUES (?, ?, ?)",
    [nombre, email, imagen]
  );
  return result;
};
