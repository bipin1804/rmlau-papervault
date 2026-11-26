
import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import dotenv from "dotenv";

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});



const storage = new CloudinaryStorage({
  cloudinary,
  params: async (req, file) => {
    const filename = file.originalname
      .replace(/\.pdf$/i, "")
      .replace(/[^a-zA-Z0-9_-]/g, "_");

    return {
      folder: "papervault",
      resource_type: "raw",
      allowed_formats: ["pdf"],
      public_id: `${Date.now()}-${filename}.pdf`,
    };
  },
});

export { cloudinary, storage };

