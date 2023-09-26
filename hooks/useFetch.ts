/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { useState, useEffect } from 'react';

type Props<T> = {
  req: () => Promise<T>;
  startValue?: T | null;
  startLoading?: boolean;
}

export const useFetch = <T>({
  req,
  startValue = null,
  startLoading = true
}: Props<T>) => {
  const [data, setData] = useState<T | null>(startValue);
  const [isLoading, setIsLoading] = useState(startLoading);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await req();

        setData(data);
      } catch (error) {
        setError(error as Error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { 
    data, 
    isLoading, 
    error, 
    mutate: setData,
  };
};
