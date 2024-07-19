// pages/api/auth/[...nextauth].js

import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
   
      return true;
    },
    async redirect({ url, baseUrl }) {
      // Redirect to the homepage or another route
      return baseUrl;
    },
    async session({ session, token, user }) {
      session.user.id = token.sub;
      return session;
    },
  },
});
