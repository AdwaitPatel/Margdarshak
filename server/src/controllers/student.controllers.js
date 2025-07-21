import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { Student } from "../models/student.models.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const registerStudent = asyncHandler(async (req, res) => {
    // get student details from frontend
    // validation - not empty
    // check if student already exists via email
    // check for images like profilePicture
    // upload them to cloudinary
    // create student object - create entry in DB
    // remove password and refreshToken field from response
    // check for student creation
    // return res

    const { email, password, confirmPassword } = req.body;

    if ([email, password, confirmPassword].some((field) => field?.trim() === "")) {
        throw new ApiError(400, "All fields are required");
    }

	const existedStudent = await Student.findOne({ email });

    if (existedStudent) {
        throw new ApiError(409, "Student with this email already exists");
    }

	if (password !== confirmPassword) {
		throw new ApiError(400, "Passwords must be same in both fields")
	}
    

    // Todo : use this for 1:1 form

    // get the profile picture path
    // const profileLocalPath = req.file?.path;

    // if (!profileLocalPath) {
    //     throw new ApiError(400, "profile picture is required");
    // }

    // const profilePic = await uploadOnCloudinary(profileLocalPath);

    // if (!profilePic) {
    //     throw new ApiError(500, "Error while uploading profile picture");
    // }

    // fullName,
    // profilePicture: profilePic.url,
    const student = await Student.create({
        email,
        password,
    });

    const createdStudent = await Student.findById(student._id).select(
        "-password -refreshToken"
    );

    if (!createdStudent) {
        throw new ApiError(
            500,
            "Something went wrong while registering the student"
        );
    }

    return res
        .status(201)
        .json(
            new ApiResponse(
                200,
                createdStudent,
                "Student registered successfully!"
            )
        );
});

export { registerStudent };
