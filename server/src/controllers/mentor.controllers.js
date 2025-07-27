

// rakhi's work => fetch all meeting details of mentor

// fetch all mentor detail from authToken in localstorage
// take authTOken from localstorage
// decode the authToken then get the user id
// based on that user id fetch all the data of mentor from DB

// just sent the response with only profilePicture and name


// const jwt = require("jsonwebtoken");
// const User = require("../models/user.models"); // adjust if you have separate Mentor model
import jwt  from "jsonwebtoken";
import { User } from "../models/user.models.js"

const JWT_SECRET = process.env.JWT_SECRET || "yourSecretKey";

const getMentorProfile = async (req, res) => {
  try {
    // Step 1: Get token from header
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    // Step 2: Decode token
    const decoded = jwt.verify(token, JWT_SECRET);
    const userId = decoded.id;

    // Step 3: Find mentor by ID and send selected fields
    const mentor = await User.findById(userId).select("name profilePicture");

    if (!mentor) {
      return res.status(404).json({ message: "Mentor not found" });
    }

    res.status(200).json({
      name: mentor.name,
      profilePicture: mentor.profilePicture,
    });
  } catch (error) {
    console.error("Error fetching mentor profile:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export { getMentorProfile }
