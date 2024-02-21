import mongoose, {Schema} from "mongoose";
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
 
  const Idea =mongoose.models.Idea || mongoose.model('Idea', ideaSchema);
  export default Idea;