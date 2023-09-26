'use client';

import { FC, ReactNode } from 'react';
import { Heading } from '@chakra-ui/react';

type Props = {
  children: ReactNode;
};

export const Title: FC<Props> = ({ children }) => (
  <Heading 
    mb={30} 
    fontSize="3xl" 
  >
    {children}
  </Heading >
);