"use client";

import React from "react";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import Profile from "@/registry/src/auth/code/mongodb/components/profile";
import { Button } from "@/registry/src/components/ui/button";
import GoogleSignInButton from "@/registry/src/auth/code/mongodb/components/goggle-button";

const Home = () => {
  const { status } = useSession();

  if (status === "authenticated") {
    return (
      <div className="flex items-center h-screen justify-center">
        <Profile />
        <Button
          onClick={() => signOut()}
          className="w-full md:w-auto bg-slate-100 text-black"
          variant="outline"
        >
          Logout
        </Button>
      </div>
    );
  }

  return (
    <div className="flex gap-10 h-screen w-full items-center justify-center text-2xl font-bold">
      <Link href="/sign-in">
        <Button>Sign In</Button>
      </Link>
      <Link href="/sign-up">
        <Button>Sign Up</Button>
      </Link>
      <GoogleSignInButton />
    </div>
  );
};

export default Home;
