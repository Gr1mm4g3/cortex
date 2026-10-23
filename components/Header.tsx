"use client";

import { SignInButton, SignUpButton, UserButton, useAuth } from "@clerk/nextjs";

export function Header() {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) {
    return (
      <header className="border-b p-4 flex items-center justify-between">
        <h1 className="text-xl font-semibold">Cortex</h1>
        <nav className="flex items-center gap-4">
          <div>Loading...</div>
        </nav>
      </header>
    );
  }

  return (
    <header className="border-b p-4 flex items-center justify-between">
      <h1 className="text-xl font-semibold">Cortex</h1>
      <nav className="flex items-center gap-4">
        {isSignedIn ? (
          <UserButton />
        ) : (
          <>
            <SignInButton mode="modal" />
            <SignUpButton mode="modal" />
          </>
        )}
      </nav>
    </header>
  );
}