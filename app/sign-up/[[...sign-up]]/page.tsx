import { SignUpClient } from "@/components/SignUpClient";
import { Suspense } from "react";

export default function SignUpPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="flex min-h-screen items-center justify-center">
        <SignUpClient />
      </div>
    </Suspense>
  );
}
