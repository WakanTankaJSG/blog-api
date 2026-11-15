import { selectAll, selectById, insert, selectByAutor } from "../models/posts.model.js";

export const getAll = async (req, res, next) => {
  try {
    const posts = await selectAll();
    res.json(posts);
  } catch (error) {
    next(error);
  }
};

export const getById = async (req, res, next) => {
  try {
    const post = await selectById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: "No existe ese post" });
    }
    res.json(post);
  } catch (error) {
    next(error);
  }
};

export const create = async (req, res, next) => {
  try {
    const result = await insert(req.body);
    const post = await selectById(result.insertId);
    res.status(201).json(post);
  } catch (error) {
    next(error);
  }
};

export const getByAutor = async (req, res, next) => {
  try {
    const posts = await selectByAutor(req.params.id);
    res.json(posts);
  } catch (error) {
    next(error);
  }
};

