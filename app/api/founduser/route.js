import { cookies } from "next/headers";
import { NextResponse } from "next/server";


export async function GET(req, res){
  const cookies =  await cookies().get('cookie');
  console.log(cookies);
  return NextResponse.json(
    {
      message:'Cokkies obtained',
      status: 200,
    }
  )

}