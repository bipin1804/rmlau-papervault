import jwt from "jsonwebtoken";
import User from "./models/user.js";

const isLoggedIn = async (req, res, next) => {
    try {

const token = req.cookies && req.cookies.token;

        if (!token) {
            return res.status(401).json({
                message: "Please login first"
            });
        }

        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        const existingUser = await User.findById(decoded.userId);

        if (!existingUser) {
            return res.status(401).json({
                message: "User not found. Please login again."
            });
        }

        
        req.user = existingUser;
        next();

    } catch (err) {
        return res.status(401).json({
            message: "Invalid or expired token"
        });
    }
};

export default isLoggedIn;