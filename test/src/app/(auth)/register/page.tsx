import RegisterForm from "@/features/auth/components/RegisterForm";

function RegisterPage() {
  return (
    <div className="flex flex-col items-center gap-10">
      <h1 className="text-3xl font-semibold">Register</h1>
      <RegisterForm />
    </div>
  );
}

export default RegisterPage;
