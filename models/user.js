import mongoose, {Schema} from "mongoose";
const userSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true, // Converts email to lowercase before saving
      trim: true // Removes whitespace from the beginning and end of email
    },
    phone: {
      type: String,
      required: true,
      validate: {
        validator: function(v) {
          return /\d{3}-\d{3}-\d{4}/.test(v); // Validates phone number format (e.g., 123-456-7890)
        },
        message: props => `${props.value} is not a valid phone number!`
      }
    },
    dateOfBirth: {
      type: Date,
      required: true
    },
    role: {
      type: String,
      enum: ['entrepreneur', 'investor'], // Specifies allowed user roles
      required: true
    }
  });
  
  // Define the Idea schema
  const ideaSchema = new mongoose.Schema({
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
  
  // Define the Idea model
  const Idea =mongoose.models.Idea || mongoose.model('Idea', ideaSchema);
  
  module.exports = { User, Idea };