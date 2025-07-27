import jwt from "jsonwebtoken";
import { log } from "../utils/logger.js";

const verifyToken = (req, res, next) => {
    let token;
    let authHeader = req.headers.authorization;

    if (authHeader && authHeader.startsWith("Bearer")) {
        token = authHeader.split(" ")[1];

        if (!token) {
            return res.status(400).json({
                message: "No token, authorization denied",
            });
        }
        try {
            const decode = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decode;

            console.log(req.user);
            next();
        } catch (error) {
            log.error(`Token auth error : ${error}`);
            return res.status(400).json({
                message: "Token is not valid",
            });
        }
    } else {
        return res.status(400).json({
            message: "No token, authorization denied",
        });
    }
};

export default verifyToken;
