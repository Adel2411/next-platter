function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="max-w-80 py-10">{children}</div>
    </div>
  );
}

export default AuthLayout;
