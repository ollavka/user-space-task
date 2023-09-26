/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { FC, useEffect } from 'react';
import { useURL } from '@/hooks/useURL';
import { Loader } from '@/components/Loader';

type Props = {
  pageLabel: string;
  pagePath: string;
};

export const RedirectToPage: FC<Props> = ({ pageLabel, pagePath }) => {
  const { router } = useURL();

  useEffect(() => {
    router.replace(pagePath);
  }, []);

  return <Loader text={`Redirect to ${pageLabel} page...`} />;
}
