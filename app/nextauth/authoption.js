import connectDB from "@/lib/mongodb";
import ENTUserTable from "@/models/entuser";
import INTuser from "@/models/intuser";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOption = {
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
 },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "email" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials, req) {
        const { email, password } = credentials;
        await connectDB();
        console.log("Authorization attempt with credentials:", credentials);
        const user = await ENTUserTable.findOne({
          email: email,
          password: password,
        });
        const user2 = await INTuser.findOne({
          email: email,
          password: password,
        });

        if (user) {
            console.log("User found in ENTUserTable:", user);
          return user;
        } else if (user2) {
            console.log("User found in ENTUserTable:", user2);
          return user2;
        } else {
            console.log("No user found with provided credentials");
          console.log("No user found with provided credentials");
          return null;
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
    signOut: "/api/auth/signout",
  },

  callbacks: {
    async jwt(token, user) {
      if (user) {
        console.log("JWT callback - User:", user);
        token.id = user.id; // Add user's MongoDB ID to the token
      }
      return token;
    },
    async session(session, user) {
        if (user) {
          session.user = {
            id: user._id,
            email: user.email,
          };
        }
        console.log("Session callback - User:", JSON.stringify(user));
        return session;
    }
  },
};
