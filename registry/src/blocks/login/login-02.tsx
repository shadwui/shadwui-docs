import React from "react";

import { Button } from "@/registry/src/components/ui/button";
import { Card, CardContent } from "@/registry/src/components/ui/card";
import { Input } from "@/registry/src/components/ui/input";
import { Label } from "@/registry/src/components/ui/label";
import Image from "next/image";

const Login_02 = () => {
  return (
    <Card className="overflow-hidden">
      <CardContent className="grid p-0 md:grid-cols-2">
        <form className="p-6 md:py-8 ">
          <div className="flex flex-col gap-y-4">
            <div className="flex flex-col items-center text-center">
              <h4 className="text-2xl font-bold">Welcome back</h4>
              <h4 className="text-balance text-muted-foreground">
                Login to your Shadwui account
              </h4>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <a
                  href="#"
                  className="ml-auto text-sm underline-offset-2 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
              <Input id="password" type="password" required />
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
            <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
              <span className="relative z-10 bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
            <div className="flex flex-col gap-y-3">
              <div className="flex items-center justify-between gap-x-3" >
                <Button variant="outline" className="w-full">
                  Login with Google
                </Button>
                <Button variant="outline" className="w-full">
                  Login with meta
                </Button>
              </div>
              <Button variant="outline" className="w-full">
                Login with apple
              </Button>
            </div>
            <div className="text-center text-sm">
              Don&apos;t have an account?{" "}
              <a href="#" className="underline underline-offset-4">
                Sign up
              </a>
            </div>
          </div>
        </form>
        <div className="flex bg-muted items-center justify-center">
          <Image
            width={200}
            height={200}
            src="/thumbs/placeholder.avif"
            alt="Image"
            className="inset-0 object-cover dark:brightness-[0.2] dark:grayscale"
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default Login_02;
