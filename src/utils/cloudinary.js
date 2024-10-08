import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET, // Click 'View Credentials' below to copy your API secret
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    console.log(`file is successfully uploaded  ${response.url}`);
    fs.unlinkSync(localFilePath)
    console.log(response);
    return response
  } catch (error) {
     
     fs.unlinkSync(localFilePath)
     return null
  }
};

export {uploadOnCloudinary}
