// /app/components/not-found.tsx
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-6">
      <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
      <p className="text-lg mb-6">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link href="/" className="text-blue-500 underline">
        Go back to Home
      </Link>
    </div>
  );
}
