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
import { useLoadingStore } from "@/stores/loading";
import { setToken } from "../api";
import { showPromiseToast } from "@/lib/toastHandler";
import { useRouter } from "next/navigation";

function LoginForm() {
  const { isLoading, setLoading } = useLoadingStore();
  const router = useRouter();

  const form = useForm<LoginInputs>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      identifier: "",
      password: "",
    },
  });

  async function onSubmit(values: LoginInputs) {
    setLoading(true);

    showPromiseToast(
      (async () => {
        console.log(values);
        await setToken();

        // On success
        form.reset();
        router.push("/protected");

        setLoading(false);
      })(),
      "Logging in",
    );
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
                    disabled={isLoading}
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
                    disabled={isLoading}
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
        <Button type="submit" className="w-full" disabled={isLoading}>
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
