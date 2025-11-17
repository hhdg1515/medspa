'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to error reporting service (e.g., Sentry)
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background-main px-4">
      <div className="max-w-md w-full text-center">
        <h1 className="text-4xl font-serif font-semibold text-text-primary mb-4">
          Oops! Something went wrong
        </h1>
        <p className="text-body text-text-secondary mb-8">
          We apologize for the inconvenience. Our team has been notified and is working on a fix.
        </p>
        <div className="space-y-4">
          <button
            onClick={reset}
            className="btn-primary w-full"
          >
            Try again
          </button>
          <Link
            href="/"
            className="btn-secondary w-full block"
          >
            Return to homepage
          </Link>
        </div>
        {error.digest && (
          <p className="mt-6 text-sm text-text-secondary">
            Error ID: {error.digest}
          </p>
        )}
      </div>
    </div>
  );
}
