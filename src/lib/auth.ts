<<<<<<< HEAD
import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import NaverProvider from "next-auth/providers/naver";
import KakaoProvider from "next-auth/providers/kakao";
=======
import { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import NaverProvider from 'next-auth/providers/naver';
import KakaoProvider from 'next-auth/providers/kakao';
>>>>>>> fbddfd048f219e2ddf3f60fcd4c20dda8a466ec1
import pb, { authenticateAdmin } from './pocketbase';
import crypto from 'crypto';

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    NaverProvider({
      clientId: process.env.NAVER_CLIENT_ID!,
      clientSecret: process.env.NAVER_CLIENT_SECRET!,
    }),
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID!,
      clientSecret: process.env.KAKAO_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
<<<<<<< HEAD
      if (account?.provider === "google" || account?.provider === "naver" || account?.provider === "kakao") {
=======
      if (
        account?.provider === 'google' ||
        account?.provider === 'naver' ||
        account?.provider === 'kakao'
      ) {
>>>>>>> fbddfd048f219e2ddf3f60fcd4c20dda8a466ec1
        try {
          await authenticateAdmin();

          let email = user.email;
          let name = user.name;
          let image = user.image;

<<<<<<< HEAD
        // Google 프로필 정보 처리
        if (account.provider === "google") {
            console.log("Google 프로필 정보:", profile);
        }

        // Naver 프로필 정보 처리
        if (account.provider === "naver") {
=======
          // Google 프로필 정보 처리
          if (account.provider === 'google') {
            console.log('Google 프로필 정보:', profile);
          }

          // Naver 프로필 정보 처리
          if (account.provider === 'naver') {
>>>>>>> fbddfd048f219e2ddf3f60fcd4c20dda8a466ec1
            // console.log("Naver 프로필 정보:", profile);
            email = (profile as any).response?.email || user.email;
            name = (profile as any).response?.name || user.name;
            image = (profile as any).response?.profile_image || user.image;
<<<<<<< HEAD
        }

        // Kakao 프로필 정보 처리
        if (account.provider === "kakao") {
            // console.log("Kakao 프로필 정보:", profile);
            email = (profile as any).kakao_account?.email || user.email;
            name = (profile as any).kakao_account?.profile?.nickname || user.name;
            image = (profile as any).kakao_account?.profile?.profile_image_url || user.image;
        }

          let existingUser;
          try {
            existingUser = await pb.collection('users').getFirstListItem(`email="${email}"`);
          } catch (error) {
            console.log("기존 사용자를 찾을 수 없음:", error);
          }
          
=======
          }

          // Kakao 프로필 정보 처리
          if (account.provider === 'kakao') {
            // console.log("Kakao 프로필 정보:", profile);
            email = (profile as any).kakao_account?.email || user.email;
            name =
              (profile as any).kakao_account?.profile?.nickname || user.name;
            image =
              (profile as any).kakao_account?.profile?.profile_image_url ||
              user.image;
          }

          let existingUser;
          try {
            existingUser = await pb
              .collection('users')
              .getFirstListItem(`email="${email}"`);
          } catch (error) {
            console.log('기존 사용자를 찾을 수 없음:', error);
          }

>>>>>>> fbddfd048f219e2ddf3f60fcd4c20dda8a466ec1
          if (!existingUser) {
            const userData = {
              email,
              emailVisibility: true,
              name: name || '',
              avatar: image || '',
              provider: account.provider,
              password: crypto.randomBytes(16).toString('hex'),
            };
            await pb.collection('users').create(userData);
          } else {
            await pb.collection('users').update(existingUser.id, {
              name: name || existingUser.name,
              avatar: image || existingUser.avatar,
              provider: account.provider,
            });
          }
        } catch (error) {
<<<<<<< HEAD
          console.error("PocketBase에 사용자 저장 중 오류 발생:", error);
=======
          console.error('PocketBase에 사용자 저장 중 오류 발생:', error);
>>>>>>> fbddfd048f219e2ddf3f60fcd4c20dda8a466ec1
          return false;
        }
      }
      return true;
    },
    async session({ session, token }) {
      if (session?.user) {
<<<<<<< HEAD
        session.user.provider = token.provider as string;
=======
        (session.user as any).provider = token.provider as string;
>>>>>>> fbddfd048f219e2ddf3f60fcd4c20dda8a466ec1
      }
      return session;
    },
    async jwt({ token, account }) {
      if (account) {
        token.provider = account.provider;
      }
      return token;
    },
  },
};
