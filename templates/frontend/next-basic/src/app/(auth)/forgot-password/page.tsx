import ForgotPasswordForm from "@/features/auth/components/ForgotPasswordForm";

function ForgotPasswordPage() {
  return (
    <div className="flex flex-col items-center gap-10">
      <h1 className="text-3xl font-semibold">Forgot Password</h1>
      <ForgotPasswordForm />
    </div>
  );
}

export default ForgotPasswordPage;
