import { NextResponse } from 'next/server';
import Idea from '../../../models/idea';
import connectDB from '../../../lib/mongodb'
export async function POST(req, res)
{
    const {createdBy, title, category, nopatner, patnername, patneremail, patnerqual, patnerphone, projectsummary, price,file} = await  req.json();
    try{
        await connectDB();
        await Idea.create({createdBy, title, category, nopatner, patnername, patneremail, patnerqual, patnerphone, projectsummary, price,file});
        console.log("idea submitted");
        return NextResponse.json(
            {
                message : "idea sucessfully created",
                status : 200,
            }
        )
    }
    catch(err){
        console.log(err);
    }
}
export async function GET(req, res)
{
    try{
        await connectDB();
        const ideas = await Idea.find();
        return NextResponse.json(
            ideas,
            {
                ideas,
                success : true,
            }
        )

    }
    catch(err)
    {
        console.log(err);
    }
}