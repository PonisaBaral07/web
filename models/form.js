import mongoose, {Schema} from "mongoose";
const formSchema = new Schema(
    {
        title : String,
        category: String,
        nopatner : Number,
        patnername : String,
        patneremail : String,
        patnerqual: String,
        patnerphone : String,
        price:Number,
        file:String,
    },
    {
        timestamps: true
    }
);

const FormTable = mongoose.models.FormTable || mongoose.model("FormTable",formSchema);

export default FormTable;