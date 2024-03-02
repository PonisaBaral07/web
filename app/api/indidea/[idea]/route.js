
import connectDB from '../../../../lib/mongodb';
import Idea from '../../../../models/idea';
import { NextResponse } from 'next/server';

export async function GET(req, {params} )
{
    const idea= params.idea;
    await connectDB();
    console.log(idea);
    const foundIdea = await Idea.find({_id : idea}) ;
    return NextResponse.json(
        {
            foundIdea,
            message:"idea obtained successfully",
            status : 200,
        }
    )

}