import mongoose, {Schema} from "mongoose";
const contactSchema = new Schema(
    {
        name: String,
        email: String,
        message : String,
    },
    {
        timestamps : true,
    }
)
const Contacts = mongoose.models.Contacts || new  mongoose.model('Contacts',contactSchema);

export default Contacts;
