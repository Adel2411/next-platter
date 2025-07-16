import ResetPasswordForm from "@/features/auth/components/ResetPasswordForm";
import { Suspense } from "react";

function ResetPasswordPage() {
  return (
    <div className="flex flex-col items-center gap-10">
      <h1 className="text-3xl font-semibold">Reset Password</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <ResetPasswordForm />
      </Suspense>
    </div>
  );
}

export default ResetPasswordPage;
