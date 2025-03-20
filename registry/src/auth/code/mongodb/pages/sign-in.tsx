"use client";

import * as z from "zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/registry/src/auth/code/mongodb/components/form";
import { Input } from "@/registry/src/components/ui/input";
import { Button } from "@/registry/src/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/src/components/ui/card";
import { signInSchema } from "@/registry/src/auth/code/mongodb/schemas/auth-schema";
import GoogleSignInButton from "@/registry/src/auth/code/mongodb/components/goggle-button";
import { signIn } from "next-auth/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function SignInForm() {
  const router = useRouter();

  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      identifier: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof signInSchema>) => {
    const result = await signIn("credentials", {
      redirect: false,
      identifier: data.identifier,
      password: data.password,
    });

    if (result?.error) {
      if (result.error === "CredentialsSignin") {
        toast("Incorrect Credentials");
      } else {
        toast(result.error);
      }
    }

    if (result?.url) {
      router.replace("/");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="min-w-96">
        <CardHeader>
          <CardTitle className="text-2xl text-center font-bold">
            Login
          </CardTitle>
          <CardDescription className="text-center text-base">
            Login with your credentials
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                name="identifier"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <Input {...field} placeholder="example@gmail.com" />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="password"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <Input type="password" {...field} />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="w-full" type="submit">
                Sign In
              </Button>
            </form>
          </Form>

          <h4 className="text-center text-muted-foreground">or</h4>

          <GoogleSignInButton />

          <div className="text-center mt-4">
            <p>
              Do not have an account{" "}
              <Link
                href="/sign-up"
                className="text-blue-600 hover:text-blue-800"
              >
                Register
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
