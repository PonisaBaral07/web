import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(req,res) {
  const cookieValue = cookies().get('cookie');
    
    if(!cookieValue) {
      return new Response('Not logged in', {status: 401}) 
    }
  
    cookies().delete('cookie')
  
    return NextResponse.json({
      message: 'Logged out successfully!'
    });
  
  }