import addMentors from '../models/addMentor.js'; //  match the export name

// @desc    Add a new mentor
// @route   POST /api/mentors
// @access  Public
export const addMentor = async (req, res, next) => {
  try {
    const mentor = await addMentors.create(req.body); //  use the model name correctly

    res.status(201).json({
      success: true,
      data: mentor
    });
  } catch (err) {
    if (err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map(val => val.message);
      return res.status(400).json({
        success: false,
        error: messages
      });
    } else if (err.code === 11000) {
      return res.status(400).json({
        success: false,
        error: 'This email is already registered'
      });
    } else {
      return res.status(500).json({
        success: false,
        error: 'Server Error'
      });
    }
  }
};

// @desc    Get all mentors
// @route   GET /api/mentors
// @access  Public
export const getMentors = async (req, res, next) => {
  try {
    const mentors = await addMentors.find(); // same here

    res.status(200).json({
      success: true,
      count: mentors.length,
      data: mentors
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};
