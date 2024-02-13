import mongoose ,{Schema} from "mongoose"
const entuserSchema = new Schema(
    {
        fname : String,
        lname : String,
        email : String,
        dob: Date,
        qualification: String,
        university: String,
        password : String,
    }
)
const ENTUserTable = mongoose.models.ENTUserTable || mongoose.model("ENTUserTable",entuserSchema)
export default ENTUserTable;