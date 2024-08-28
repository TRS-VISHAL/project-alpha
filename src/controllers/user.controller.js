import { asyncHandler } from "../utils/asyncHandler.js";
import { apiError } from "../utils/apiError.js";
import { User } from "../models/user.model.js";
import {uploadOnCloudinary} from "../utils/cloudinary.js"
import { apiResponse } from "../utils/apiResponse.js";

const registerUser = asyncHandler(async (req, res) => {
  const { fullName, email, username, password } = req.body;


  if (
    [username, password, fullName, email].some((fields) => {
      return fields?.trim() === "";
    })
  ) {
    throw new apiError(400, "all fields must be required");
  }

 const existedUser = await User.findOne({ $or: [{ username }, { email }] });

 if(existedUser){
     throw new apiError(409, "username or email already exists");
 }


 const localAvatarPath = req.files?.avatar[0]?.path;
 const localCoverImage = req.files?.coverImage[0]?.path

 if(!localAvatarPath){
     throw new apiError(400, "avatar is required");
 }
 const avatar = await uploadOnCloudinary(localAvatarPath)
 const coverImage = await uploadOnCloudinary(localCoverImage)

 if(!avatar){
     throw new apiError(500, "Failed to upload avatar to cloudinary");
 }

const user =await User.create({fullName,
     avatar:avatar.url,
     coverImage:coverImage?.url || "",
     email,
     password,
     username:username.toLowerCase(),
})

const createdUser = await User.findById(user._id).select(
     "-password -refreshToken "
)

if(!createdUser){
     throw new apiError(500, "Failed to create user");
}

return res.status(201).json(
     new apiResponse(200,createdUser,"user registered successfully")
)
 
});

export default registerUser;
