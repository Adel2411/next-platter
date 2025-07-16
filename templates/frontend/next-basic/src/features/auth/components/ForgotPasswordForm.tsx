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
import { ForgotPasswordInputs } from "../types";
import { forgotPasswordSchema } from "../schema";
import { useRouter } from "next/navigation";
import { useLoadingStore } from "@/stores/loading";
import { showPromiseToast } from "@/lib/toastHandler";

function ForgotPasswordForm() {
  const { isLoading, setLoading } = useLoadingStore();

  const router = useRouter();

  const form = useForm<ForgotPasswordInputs>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values: ForgotPasswordInputs) {
    setLoading(true);

    const forgotPasswordPromise = new Promise(async (resolve, _) => {
      // Simulate a network request
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(values);

      // On success
      form.reset();
      router.push("/reset-password?token=abcd1234");

      resolve("Forgot password request successful");
      setLoading(false);
    });

    showPromiseToast(forgotPasswordPromise, "Processing your request");
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-2">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="space-y-0">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    disabled={isLoading}
                    type="email"
                    placeholder="email..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" className="w-full" disabled={isLoading}>
          Send Reset Password Email
        </Button>
      </form>
    </Form>
  );
}

export default ForgotPasswordForm;
