import { Router } from "express";
import { getAll, getById, create } from "../../controllers/autores.controller.js";
import { getByAutor } from "../../controllers/posts.controller.js";

const router = Router();

router.get("/", getAll);
router.get("/:id", getById);
router.get("/:id/posts", getByAutor);
router.post("/", create);

export default router;

