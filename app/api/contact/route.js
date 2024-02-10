
import connectDB from "@/lib/mongodb";
import Contacts from "@/models/contact";
import { NextResponse } from "next/server";

export  async function POST(req, res) {
      const { name, email, message } = await req.json();
      try{
      await connectDB();
      await Contacts.create({name, email, message});
      return NextResponse.json(
        {
            message: "Data sent successfully",
            success: true,
        }
    )
      }
      catch(err) {
        console.log(err);
      }
  }

  export async function GET(req, res) {
    try{
      await connectDB();
      const contacts = await Contacts.find();
      return new NextResponse(JSON.stringify(contacts), {success: true});

    }
    catch(err) {
      console.log(err);
    }
  }


  
