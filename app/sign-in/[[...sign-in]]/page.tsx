import { SignInClient } from "@/components/SignInClient";
import { Suspense } from "react";

export default function SignInPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="flex min-h-screen items-center justify-center">
        <SignInClient />
      </div>
    </Suspense>
  );
}
