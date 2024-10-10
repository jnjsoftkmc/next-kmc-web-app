"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LoginPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/dashboard"); // 로그인 성공 시 대시보드로 리다이렉트
    }
  }, [status, router]);

  if (status === "loading") {
    return <div>로딩 중...</div>;
  }

  return (
    <div>
      <h1>로그인</h1>
      {!session ? (
        <button onClick={() => signIn("google")}>Google로 로그인</button>
      ) : (
        <div>
          <p>{session.user?.name}님 환영합니다!</p>
          <button onClick={() => signOut()}>로그아웃</button>
        </div>
      )}
    </div>
  );
}
