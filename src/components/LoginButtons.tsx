"use client";

import { signIn } from "next-auth/react";

export default function LoginButtons() {
  const handleLogin = async (provider: string) => {
    await signIn(provider);
  };

  return (
    <div>
      <button onClick={() => handleLogin("google")}>Google로 로그인</button>
      <button onClick={() => handleLogin("naver")}>Naver로 로그인</button>
      <button onClick={() => handleLogin("kakao")}>Kakao로 로그인</button>
    </div>
  );
}