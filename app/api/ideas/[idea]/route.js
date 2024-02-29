
import connectDB from '../../../../lib/mongodb';
import Idea from '../../../../models/idea';
import { NextResponse } from 'next/server';

export async function GET(req, {params} )
{
    const idea= params.idea;
    console.log("this is the Api of" ,idea);
    await connectDB();
    const foundIdea = await Idea.find({createdBy: idea}) ;
    return NextResponse.json(
        {
            foundIdea,
            message:"userid obtained successfully",
            status : 200,
        }
    )

}