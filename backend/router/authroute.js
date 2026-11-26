import express from 'express';
const router = express.Router();
import isLoggedIn from '../middleware.js';
import { signupUser } from '../controller/user.js';
import { Loginuser } from '../controller/user.js';
import { Logoutuser } from '../controller/user.js';
import { getCurrentUser } from '../controller/user.js';

router.post("/signup",signupUser);
router.post("/login",Loginuser)
router.post("/logout",Logoutuser);
router.get("/me", isLoggedIn, getCurrentUser);


export default router;




