import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
    let token;
    let authHeader = req.headers.authorization;

    if (authHeader && authHeader.startsWith("Bearer")) {
        //Bearer abcd1234 => ["bearer","abcd1234"]
        token = authHeader.split(" ")[1];

        if (!token) {
            return res.status(400).json({
                message: "No token, authorization denied",
            });
        }
        try {
            const decode = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
            req.user = decode;

            console.log("The decoded user is : ", req.user);
            next();
        } catch (error) {
            console.log("Token auth error : ", error);
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
