import { Router } from "express";
import { getUser } from "../controllers/userContoller";
import authMiddleware from "../middlewares/authMiddleware";

const router = Router();

router.get("/:id", authMiddleware, getUser);
// router.post("/", createUser);
// router.put("/", authMiddleware, updateUser);
// router.get("/", authMiddleware, getUsers);
// router.delete("/:id", authMiddleware, deleteUser);
// router.delete("/", authMiddleware, deleteUsers);

export default router;
