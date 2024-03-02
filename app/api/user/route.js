import connectDB from "@/lib/mongodb";
import mongoose from "mongoose";
import User from "@/models/user"
import { NextResponse } from "next/server";


export async function POST (req, res){
    const {fname,lname,email,dob,company,job,qualification,university,password,category,role} =  await req.json();
    try{
        await connectDB();
        await User.create({
            fname,
            lname,
            email,
            dob,
            company,
            job,
            qualification,
            university,
            category,
            password,
            role
        });
        return NextResponse.json(
            {
                message: "Data sent successfully",
                success: true,
            }
        )

    }
    catch(err){console.log(err);}

}

export async function GET(req, res)
{
    try{
        await connectDB();
        const user = await User.find();
        return NextResponse.json(
            user,
            {
                user,
                success : true,
            }
        )

    }
    catch(err)
    {
        console.log(err);
    }
}




