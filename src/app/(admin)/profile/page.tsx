/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useSession } from "next-auth/react";
import React from "react";

export default function ProfilePage() {
  const { data: session }: { data: any } = useSession();

  return (
    <div>
      <h1>Profile Page</h1>
      <h2>{session?.user?.name}</h2>
    </div>
  );
}
