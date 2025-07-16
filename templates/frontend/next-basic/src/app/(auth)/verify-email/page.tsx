import VerifyEmailForm from "@/features/auth/components/VerifyEmailForm";

function VerifyEmailPage() {
  return (
    <div className="flex flex-col items-center gap-10">
      <h1 className="text-3xl font-semibold">Verify Email</h1>
      <VerifyEmailForm />
    </div>
  );
}

export default VerifyEmailPage;
