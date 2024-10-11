"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return <div>로딩 중...</div>;
  }

  const handleLogout = async () => {
    await signOut({ redirect: false });
    router.push("/login");
  };

  return (
    <div>
      <h1>대시보드</h1>
      {session?.user && (
        <div>
          <p>{session.user.name}님 환영합니다!</p>
          <p>이메일: {session.user.email}</p>
          <button onClick={handleLogout}>로그아웃</button>
        </div>
      )}
    </div>
  );
}
