import React from "react";

import { Button } from "@/registry/src/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/src/components/ui/card";
import { Input } from "@/registry/src/components/ui/input";
import { Label } from "@/registry/src/components/ui/label";
import { Separator } from "@/registry/src/components/ui/separator";

const Register_01 = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl text-center font-heading">
          Register
        </CardTitle>
        <CardDescription>
          Enter your email below to register to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
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
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                required
                placeholder="Password"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input
                id="confirm-password"
                type="password"
                required
                placeholder="Confirm Password"
              />
            </div>
            <Button type="submit" className="w-full">
              Register
            </Button>
          </div>
        </form>
      </CardContent>

      <Separator />

      <CardContent className="pt-4">
        <Button variant="outline" className="w-full">
          Login with Google
        </Button>

        <div className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <a href="#" className="underline underline-offset-4">
            Login
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

export default Register_01;
