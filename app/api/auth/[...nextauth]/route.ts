import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

const authOptions: NextAuthOptions = {
    session: {
        strategy: "jwt",
    },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
            allowDangerousEmailAccountLinking: false,
            authorization: "https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code",
        }),
    ],
    callbacks: {
        signIn({ profile }) {
            if (!profile?.email) {
                throw new Error("No email found");
            }
            return true;
        },
    },
};
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
