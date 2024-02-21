import connectDB from "@/lib/mongodb";
import User from "@/models/user";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";


export async function POST(req, res) {
  console.log("POST Method");
  const { email, password } = await req.json();
  console.log(email, password);

  try {
    await connectDB();
    const foundUser = await User.findOne({ email });
    if (foundUser && foundUser.password === password) {
      const token = jwt.sign(
        { userId: foundUser._id,
        role: foundUser.role},
        process.env.NEXTAUTH_SECRET,

      );
      console.log('login successful');
      cookies().set(
        {
          name: 'cookie',
          value: token,
          httpOnly: true,
          path : '/'
        }
      )
      return NextResponse.json({
        token,
        message: "Login successful",
        success: true,
      });
      
    } else {
      console.log("Login failed. Invalid email or password.");
      return NextResponse.json({
        message: "Invalid email or password",
        success: false,
      });
    }
  } catch (err) {
    console.error("Error:", err);
    return NextResponse.json({
      message: "Internal Server Error",
      success: false,
    });
  }
}
