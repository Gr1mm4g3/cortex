import { auth } from "@clerk/nextjs/server";
import { Suspense } from "react";

async function DashboardContent() {
  const { userId } = await auth();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <p className="text-gray-600">Welcome to your Cortex dashboard!</p>
      <p className="text-gray-500 mt-2">User ID: {userId}</p>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <Suspense fallback={<div className="p-8">Loading dashboard...</div>}>
      <DashboardContent />
    </Suspense>
  );
}