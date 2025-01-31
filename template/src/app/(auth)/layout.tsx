function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-screen flex justify-center items-center">
      {children}
    </div>
  );
}

export default AuthLayout;
