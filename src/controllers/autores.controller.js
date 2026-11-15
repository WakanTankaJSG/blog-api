import { selectAll, selectById, insert } from "../models/autores.model.js";

export const getAll = async (req, res, next) => {
  try {
    const autores = await selectAll();
    res.json(autores);
  } catch (error) {
    next(error);
  }
};

export const getById = async (req, res, next) => {
  try {
    const autor = await selectById(req.params.id);
    if (!autor) {
      return res.status(404).json({ message: "No existe ese autor" });
    }
    res.json(autor);
  } catch (error) {
    next(error);
  }
};

export const create = async (req, res, next) => {
  try {
    const result = await insert(req.body);
    const autor = await selectById(result.insertId);
    res.status(201).json(autor);
  } catch (error) {
    next(error);
  }
};


