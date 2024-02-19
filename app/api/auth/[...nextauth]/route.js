import { authOption } from "@/app/nextauth/authoption";
import NextAuth from "next-auth";


const handler = NextAuth(authOption);
export  {handler as POST, handler as GET};