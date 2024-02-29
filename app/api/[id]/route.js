import mongoose from 'mongoose';
import connectDB from '../../../lib/mongodb';
import User from '../../../models/user';
import { NextResponse } from 'next/server';

export async function GET(req, {params} )
{
    const id= params.id;
    console.log(id);
    await connectDB();
    const foundUser = await User.findById(id);
    return NextResponse.json(
        {
            foundUser,
            message:"userid obtained successfully",
            status : 200,
        }
    )

}