import connectDB from "@/lib/mongodb";
import ENTUserTable from "@/models/entuser";
import { NextResponse } from "next/server";

export async function POST(req, res)
{
    const {fname, lname, email,dob,qualification,university,password} = await req.json();
    try{   
    await connectDB();
    await ENTUserTable.create({fname, lname, email,dob,qualification,university,password});
    return  NextResponse.json(
        {
            message: "Data sent successfully",
            success: true,
        }
    )
    }
    catch(err){
        console.log(err);
    }
}
export async function GET(req, res) {
    try{
      await connectDB();
      const users = await ENTUserTable.find();
      return new NextResponse(JSON.stringify(users), {success: true});

    }
    catch(err) {
      console.log(err);
    }
  }