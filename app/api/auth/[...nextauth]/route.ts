import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

const userAuth = {
    providers:[
        GoogleProvider({
            clientId:process.env.GOOGLE_CLIENT_ID as string,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET as string
        })
    ],
    secret:"d213fb8c1fe0eff74fcc60bd164285",
}

const handler = NextAuth(userAuth);
export {handler as GET, handler as POST};