import mongoose ,{Schema} from "mongoose"
const userSchema = new Schema(
    {
        email :{type: String, required: true, unique: true},
        password : {type: String, required: true}
    }
)
const UserTable = mongoose.models.UserTable || mongoose.model("UserTable",userSchema)
export default UserTable;