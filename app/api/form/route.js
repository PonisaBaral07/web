import connectDB from "@/lib/mongodb";
import FormTable from "@/models/form";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(req, res)
{
    const {title,category, nopatner, patnername, patneremail,patnerqual, patnerphone, price, file} = await req.json();
    await connectDB();
    await FormTable.create({title, category, nopatner, patnername, patneremail,patnerqual, patnerphone,price, file});
    return NextResponse.json(
        {
            message: "Data Sent Successfully",
            sucess:true
        }
    )
}
export async function GET(req, res)
{
    await connectDB();
    const formData = await FormTable.find();
    return new NextResponse(
        JSON.stringify((formData),
        {
            message: "Data Sent Successfully"
        }
        )
    )

}