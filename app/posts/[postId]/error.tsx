'use client'

import { useEffect, useRef } from 'react'
import { useParams } from 'next/navigation';
import { ErrorPage } from '@/components/ErrorPage';
import toast from 'react-hot-toast';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const { postId } = useParams();
  const isErrorPushed = useRef(false);

  useEffect(() => {
    if (!error?.message || isErrorPushed.current) {
      return;
    }

    isErrorPushed.current = true;
    toast.error(error.message);
  }, [error?.message]);

  return (
    <ErrorPage 
      title={`Comments for post ${postId}`}
      reset={reset}
    />
  );
}