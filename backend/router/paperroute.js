import express from 'express';
const router = express.Router();
import papertest from '../controller/paper.js'
import { filterPapers } from '../controller/paper.js';
import { getyear } from '../controller/paper.js';
import { printpaper } from '../controller/paper.js';
import { upload } from '../controller/paper.js';
import isLoggedIn from '../middleware.js';
import { updateroute } from '../controller/paper.js';
import { updatePaperInfo } from '../controller/paper.js';
import { deleteroute } from '../controller/paper.js';
import { FilterSubject } from '../controller/paper.js';
// All router

router.post("/test",isLoggedIn,upload.single('pdf'),papertest);
router.get("/search/:year/:Branch",filterPapers);
router.get("/search/:year",getyear);
router.get("/search/:year/:Branch/:semester",printpaper);
router.delete("/delete/:id",deleteroute);
router.put("/update/:id", updateroute);
router.get("/search/:year/:Branch/:semester/:subject",FilterSubject);

// Update PDF and paper year
router.put(
  "/update-info/:id",
  upload.single("pdf"),
  updatePaperInfo
);



export default router;

