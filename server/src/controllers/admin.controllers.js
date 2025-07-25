import { User } from "../models/user.models";

const getAllMentors = async (req, res) => {
    const mentors = await User.find({ role: "mentor" });
    res.status(200).json({ mentors });
};

const getAllStudents = async (req, res) => {
    const students = await User.find({ role: "student" });
    res.status(200).json({ students });
};

export { getAllUsers, getAllStudents };

