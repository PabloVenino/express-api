import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.header("Authorization");
    if (!token) {
        res.status(401).json({message: "Unauthorized"})
        return;
    }

    try{
        const decoded = jwt.verify(token, "JWT_SECRET");
        (req as any).user = decoded;
        next()
    }catch(error){
        res.status(400).json({message: "Invalid token"})
    }
}

export default authMiddleware;