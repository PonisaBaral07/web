import connectDB from "@/lib/mongodb";
import ENTUserTable from "@/models/entuser";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"


const handler = NextAuth(
    {
        providers : [
            CredentialsProvider(
                {
                    name : 'credentials',
                    credentials :
                    {
                        email : { label: 'email', type: 'email'},
                        password : { label: 'password', type: 'password'}
                    },
                    async authorize(credentials, req)
                    {
                        const {email, password} = credentials;
                        await connectDB();
                        const user = await ENTUserTable.findOne({email: email, password: password})
                        console.log(user);
                        if (user) {
                            return user;
                        } else {
                            console.log('No user found with provided credentials');
                            return null; 
                        }
                    }
                }

            )
        ],
        pages:{
            signIn : '/login',
            signOut : '/api/auth/signout',
        },
        session: {
            strategy : "jwt",
            maxAge: 30 * 24 * 60 * 60, // 30 days
        },
        callbacks: {
            async jwt(token, user) {
                if (user) {
                    console.log(user);
                token.id = user.id; // Add user's MongoDB ID to the token
                }
                return token;
            },
            async session(session, token) {
                if (token && token.id) {
                    console.log("the user data is ");
                    session.user.id = token.id; // Add user's MongoDB ID to the session
                }
                return session;
            },
        },

    }
);
export  {handler as POST, handler as GET};