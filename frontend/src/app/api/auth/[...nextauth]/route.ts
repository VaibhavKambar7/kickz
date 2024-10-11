import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import dotenv from "dotenv";
import { getAllUsers } from "@/app/utils/getAllUsers";
import bcryptjs from "bcryptjs";
dotenv.config();

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", placeholder: "Enter Email" },
        password: { label: "Password", placeholder: "Enter Password" },
      },
      async authorize(credentials) {
        if (!credentials || !credentials.email || !credentials.password)
          return null;

        const users = await getAllUsers();
        const user = users.users.find(
          (item: any) => item.email === credentials.email,
        );
        if (user) {
          console.log("found user");
          const passwordMatch = await bcryptjs.compare(
            credentials.password,
            user.hashedPassword,
          );
          if (!passwordMatch) {
            return null;
          }
        }
        return user;
      },
    }),
  ],
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET,
  pages: { signIn: "/login" },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
