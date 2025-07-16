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
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { VerifyEmailInputs } from "../types";
import { verifyEmailSchema } from "../schema";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import { useLoadingStore } from "@/stores/loading";
import { useRouter } from "next/navigation";
import { showPromiseToast } from "@/lib/toastHandler";
import { setToken } from "../api";

function VerifyEmailForm() {
  const { isLoading, setLoading } = useLoadingStore();
  const router = useRouter();

  const form = useForm<VerifyEmailInputs>({
    resolver: zodResolver(verifyEmailSchema),
    defaultValues: {
      otp: "",
    },
  });

  async function onSubmit(values: VerifyEmailInputs) {
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
      "Verifying your email",
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="otp"
          render={({ field }) => (
            <FormItem className="flex flex-col items-center">
              <FormLabel>One-Time Code</FormLabel>
              <FormControl>
                <InputOTP
                  maxLength={6}
                  pattern={REGEXP_ONLY_DIGITS}
                  disabled={isLoading}
                  {...field}
                >
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                  </InputOTPGroup>
                  <InputOTPSeparator />
                  <InputOTPGroup>
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </FormControl>
              <FormMessage />
              <FormDescription>
                Please enter the one-time code sent to your email.
              </FormDescription>
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={isLoading}>
          Verify Email
        </Button>
      </form>
    </Form>
  );
}

export default VerifyEmailForm;
