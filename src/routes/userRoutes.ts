import { Router } from "express";
import { UserController } from "../controllers/userContoller";
import authMiddleware from "../middlewares/authMiddleware";

const router = Router();

router.get("/:id", authMiddleware, UserController.getUser);
router.post("/", UserController.createUser);
router.put("/", authMiddleware, UserController.updateUser);
router.get("/", authMiddleware, UserController.getUsers);
router.delete("/:id", authMiddleware, UserController.deleteUser);
router.delete("/", authMiddleware, UserController.deleteUsers);

export default router;
