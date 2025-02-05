"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { LoginInputs } from "../types";
import { loginSchema } from "../schema";
import Link from "next/link";
import OAuthButtons from "./OAuthButtons";

function LoginForm() {
  const form = useForm<LoginInputs>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      identifier: "",
      password: "",
    },
  });

  async function onSubmit(values: LoginInputs) {
    console.log(values);
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-2">
          <FormField
            control={form.control}
            name="identifier"
            render={({ field }) => (
              <FormItem className="space-y-0">
                <FormLabel>Identifier</FormLabel>
                <FormControl>
                  <Input
                    disabled={form.formState.isSubmitting}
                    placeholder="username or email..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="space-y-0">
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    disabled={form.formState.isSubmitting}
                    type="password"
                    placeholder="password..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormDescription>
            <Button variant="link" size="sm" className="p-0" asChild>
              <Link href={"/forgot-password"}>Forgot your password?</Link>
            </Button>
          </FormDescription>
        </div>
        <Button
          type="submit"
          className="w-full"
          disabled={form.formState.isSubmitting}
        >
          Login
        </Button>
        <OAuthButtons />
        <FormDescription>
          Don't have an account?
          <Button variant="link" asChild>
            <Link href={"/register"}>register</Link>
          </Button>
        </FormDescription>
      </form>
    </Form>
  );
}

export default LoginForm;
