"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ResetPasswordBody, ResetPasswordInputs } from "../types";
import { resetPasswordSchema } from "../schema";
import { useRouter, useSearchParams } from "next/navigation";
import { useLoadingStore } from "@/stores/loading";
import { showErrorToast, showPromiseToast } from "@/lib/toastHandler";

function ResetPasswordForm() {
  const { isLoading, setLoading } = useLoadingStore();

  const router = useRouter();

  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const form = useForm<ResetPasswordInputs>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      newPassword: "",
      confirmPassword: "",
    },
  });
  async function onSubmit(values: ResetPasswordInputs) {
    const { confirmPassword, ...valuesWithoutConfirmPassword } = values;
    if (!token) {
      console.log("Token not found");
      showErrorToast("Token not found");
      form.reset();
      return;
    }

    setLoading(true);
    const body: ResetPasswordBody = {
      ...valuesWithoutConfirmPassword,
      token,
    };

    const resetPasswordPromise = new Promise(async (resolve, _) => {
      // Simulate a network request
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(body);

      // On success
      form.reset();
      router.push("/login");

      resolve("Password reset successful");
      setLoading(false);
    });

    showPromiseToast(resetPasswordPromise, "Resetting your password");
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-2">
          <FormField
            control={form.control}
            name="newPassword"
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
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem className="space-y-0">
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input
                    disabled={isLoading}
                    type="password"
                    placeholder="confirm password..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" className="w-full" disabled={isLoading}>
          Change Password
        </Button>
      </form>
    </Form>
  );
}

export default ResetPasswordForm;
