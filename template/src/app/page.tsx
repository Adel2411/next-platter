export default function Home() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <h1 className="text-2xl font-semibold">
        Welcome to Adel&apos;s Next.js Starter Template!
      </h1>
      <p>{process.env.NEXT_PUBLIC_API_URL}</p>
    </div>
  );
}
