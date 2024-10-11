<<<<<<< HEAD
"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import LoginButtons from "@/components/LoginButtons";
import LogoutButton from "@/components/LogoutButton";

export default function LoginPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/dashboard");
    }
  }, [status, router]);

  if (status === "loading") {
    return <div>로딩 중...</div>;
  }

  return (
    <div>
      <h1>로그인</h1>
      {!session ? (
        <LoginButtons />
      ) : (
        <div>
          <p>{session.user?.name}님 환영합니다!</p>
          <LogoutButton />
        </div>
      )}
    </div>
  );
=======
"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import LoginButtons from "@/components/LoginButtons";
import LogoutButton from "@/components/LogoutButton";

export default function LoginPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/dashboard");
    }
  }, [status, router]);

  if (status === "loading") {
    return <div>로딩 중...</div>;
  }

  return (
    <div>
      <h1>로그인</h1>
      {!session ? (
        <LoginButtons />
      ) : (
        <div>
          <p>{session.user?.name}님 환영합니다!</p>
          <LogoutButton />
        </div>
      )}
    </div>
  );
>>>>>>> fbddfd048f219e2ddf3f60fcd4c20dda8a466ec1
}