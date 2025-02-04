import ResetPasswordForm from "@/features/auth/components/ResetPasswordForm";

function ResetPasswordPage() {
  return (
    <div className="flex flex-col items-center gap-10">
      <h1 className="text-3xl md:text-4xl font-semibold">Reset Password</h1>
      <ResetPasswordForm />
    </div>
  );
}

export default ResetPasswordPage;
