'use client';

import { Button } from '@chakra-ui/react';
import { ChevronLeftIcon } from '@chakra-ui/icons';
import { useURL } from '@/hooks/useURL';

export const BackButton = () => {
  const { router } = useURL();
  
  const goBack = () => {
    router.back();
  };

  return (
    <Button
      onClick={goBack}
      leftIcon={<ChevronLeftIcon />}
      colorScheme="blue"
      mb={5}
    >
      Back
    </Button>
  );
};
