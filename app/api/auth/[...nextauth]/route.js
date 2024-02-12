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
                    async authorize (credentials, req)
                    {
                        const {email, password} = credentials;
                        if(email === 'a@g.com' && password === '123')
                        {
                            console.log(email);
                            console.log(password);
                            return email;
                        }
                        return null;
                    }
                }

            )
        ],
        pages:{
            signIn : '/login',
        },
        session: {},

    }
);
export  {handler as POST, handler as GET};