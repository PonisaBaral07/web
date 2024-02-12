import mongoose ,{Schema} from "mongoose"
const entuserSchema = new Schema(
    {
        fname : String,
        lname : String,
        email :{type: String, required: true, unique: true},
        dob: Date,
        qualification: String,
        university: String,
        password : {type: String, required: true}
    }
)
const ENTUserTable = mongoose.models.ENTUserTable || mongoose.model("ENTUserTable",entuserSchema)
export default ENTUserTable;