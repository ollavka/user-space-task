/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import type { SearchParams } from '@/types';
import { getSearchWith } from '@/utils/searchHelper';

export const useURL = () => {
  const router = useRouter();
  const pathname = usePathname();
  const currParams = useSearchParams();

  const searchParams = new URLSearchParams(currParams.toString());
  
  const pushParams = (params: SearchParams) => {
    const newSearchParams = getSearchWith(searchParams, params);

    router.push(`${pathname}?${newSearchParams.toString()}`);
  };

  const pushPathname = (path: string) => {
    router.push(`${path}?${currParams.toString()}`);
  }

  const removeAllParams = () => {
    router.push(pathname);
  }

  return {
    router,
    pathname,
    params: searchParams,
    pushParams,
    removeAllParams,
    pushPathname,
  }
};
