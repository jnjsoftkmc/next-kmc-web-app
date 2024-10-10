import NextAuth, { Session } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import PocketBase from "pocketbase";

const pb = new PocketBase("http://localhost:8090");

// PocketBase 관리자 로그인
async function loginAdmin() {
  await pb.admins.authWithPassword(process.env.PB_ADMIN_EMAIL!, process.env.PB_ADMIN_PW!);
}

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === "google") {
        try {
          await loginAdmin(); // 관리자로 로그인

          // PocketBase에 사용자 정보 저장 또는 업데이트
          const existingUser = await pb
            .collection("users")
            .getFirstListItem(`email="${user.email}"`)
            .catch(() => null);

          if (existingUser) {
            await pb.collection("users").update(existingUser.id, {
              name: user.name,
              email: user.email,
              avatarUrl: user.image,
            });
          } else {
            // 임시 비밀번호 생성
            const tempPassword = Math.random().toString(36).slice(-8);
            await pb.collection("users").create({
              name: user.name,
              email: user.email,
              password: tempPassword,
              passwordConfirm: tempPassword,
              avatarUrl: user.image,
            });
          }

          pb.authStore.clear(); // 관리자 세션 종료
          return true;
        } catch (error) {
          console.error("PocketBase 사용자 저장/업데이트 오류:", error);
          return false;
        }
      }
      return true;
    },
    async session({ session }) {
      if (session?.user) {
        try {
          await loginAdmin(); // 관리자로 로그인
          const pbUser = await pb.collection("users").getFirstListItem(`email="${session.user.email}"`);
          (session.user as any).id = pbUser.id;
          pb.authStore.clear();
        } catch (error) {
          console.error("PocketBase 사용자 조회 오류:", error);
        }
      }
      return session;
    },
  },
});

export { handler as GET, handler as POST };
