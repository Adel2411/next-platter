import LoginForm from "@/features/auth/components/LoginForm";

function LoginPage() {
  return (
    <div className="flex flex-col items-center gap-10">
      <h1 className="text-2xl font-semibold">Login</h1>
      <LoginForm />
    </div>
  );
}

export default LoginPage;
