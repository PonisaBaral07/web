import { Timestamp } from "mongodb";
import mongoose, { Schema } from "mongoose";
const ideaSchema = new Schema({
  createdBy: String,
  title: String,
  category: String,
  nopatner: String,
  patnername: String,
  patneremail: String,
  patnerqual: String,
  patnerphone: String,
  projectsummary: String,
  price: String,
  file: String,
},
{
  timestamps: true,
});

const Idea = mongoose.models.Idea || mongoose.model("Idea", ideaSchema);
export default Idea;
