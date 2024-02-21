import connectDB from "@/lib/mongodb";
import mongoose from "mongoose";
import User from "@/models/user"
import { NextResponse } from "next/server";

import jwt from "jsonwebtoken";

export async function POST (req, res){
    const {fname,lname,email,dob,company,job,qualification,university,password,checked,role} =  await req.json();
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
// pages/api/user.js




