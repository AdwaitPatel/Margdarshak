import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import dotenv from "dotenv";
import { log } from "./logger.js";

dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null;

        // upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto",
        });

        // file is uploaded on cloudinary and remove it from server
        log.success("File is uploaded => ", response.url);

        fs.unlinkSync(localFilePath);

        return response;
    } catch (error) {
        log.error("Error while uploading on Cloudinary ", error);

        fs.unlinkSync(localFilePath); // remove the locally saved temp file if upload fails

        return null;
    }
};

export { uploadOnCloudinary };
