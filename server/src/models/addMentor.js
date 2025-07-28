import mongoose from 'mongoose';

const mentorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
    trim: true,
    maxlength: [50, 'Name cannot be more than 50 characters']
  },
  email: {
    type: String,
    required: [true, 'Please add an email'],
    unique: true,
    trim: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please add a valid email'
    ]
  },
  expertise: {
    type: [String],
    required: [true, 'Please add at least one expertise area']
  },
  yearsOfExperience: {
    type: Number,
    required: [true, 'Please add years of experience'],
    min: [0, 'Years of experience cannot be negative']
  },
  availability: {
    type: Boolean,
    default: true
  },
  bio: {
    type: String,
    maxlength: [500, 'Bio cannot be more than 500 characters']
  },
  photo: {
    type: String, // URL or base64
    default: ''   // optional field, not required
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const addMentors = mongoose.model('Mentor', mentorSchema);
export default addMentors;
