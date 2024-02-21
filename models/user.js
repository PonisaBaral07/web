import mongoose, {Schema} from "mongoose";
const userSchema = new Schema({
    fname: {
      type: String,
      required: true
    },
    lname: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true, 
      trim: true 
    },
    dob: {
      type: Date,
      required: true
    },
    company: {
      type: String,
      required: false
    },
    job: {
      type: String,
      required: false
    },
    qualification: {
      type: String,
      required: false
    },
    university: {
      type: String,
      required: false
    },
    
    password: {
      type: String,
      required: true
    },
    role: {
      type: String,
      enum: ['entrepreneur', 'investor'], 
      required: true
    }
  });
  
  // Define the Idea schema
  const ideaSchema = new Schema({
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    likes: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }]
  });
  
  // Define the User model
  const User = mongoose.models.User || mongoose.model('User', userSchema);
  
  
  
export default User;