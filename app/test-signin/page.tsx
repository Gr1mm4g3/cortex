"use client";

import { SignIn } from "@clerk/nextjs";

export default function TestSignIn() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <SignIn />
    </div>
  );
}