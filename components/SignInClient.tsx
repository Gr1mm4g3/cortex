"use client";

import { SignIn } from "@clerk/nextjs";

export function SignInClient() {
  console.log("SignInClient rendering");
  return <SignIn />;
}