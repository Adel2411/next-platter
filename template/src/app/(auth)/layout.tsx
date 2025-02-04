function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-screen flex justify-center items-center">
      <div className="max-w-80">{children}</div>
    </div>
  );
}

export default AuthLayout;
