import { Router } from "express";
import userRoutes from "./userRoutes";

const router = Router();

router.use("/users", userRoutes);
// router.use("/product", productRoutes);

export default router;