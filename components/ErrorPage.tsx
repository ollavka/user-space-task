'use client'

import { FC } from 'react'
import { Text, Button } from '@chakra-ui/react';
import { Title } from '@/components/Title';

type Props = {
  title: string;
  reset: () => void;
};

export const ErrorPage: FC<Props> = ({ title, reset }) => (
  <>
    <Title>{title}</Title>
    <Text
      fontSize="2xl"
      fontWeight="600"
      color="red.400"
      mt={10}
    >
      Oops! Something went wrong
    </Text>
    <Button
      onClick={reset}
      colorScheme="green"
      mt={5}
    >
      Try again
    </Button>
  </>
);
