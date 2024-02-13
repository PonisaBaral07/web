import mongoose ,{Schema} from "mongoose";
 const intSchema = new Schema(
    {
        fname : String,
        lname : String,
        email : String,
        dob: Date,
        compname: String,
        job: String,
        password : String,
    }
 )
 const INTuser = mongoose.models.INTuser || mongoose.model('INTuser', intSchema);

 export default INTuser;