'use client';
/* eslint-disable max-len */

import { Button, Box, Icon } from "@chakra-ui/react";
import { useURL } from '@/hooks/useURL';

const HomeIcon = () => (
  <Icon  viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
    <path fill="#231f20" d="M13.85 7.6 13 6.77 8.35 2.15a.48.48 0 0 0-.7 0L3 6.72l-.83.82a.5.5 0 1 0 .7.71v5.2a.5.5 0 0 0 .5.5h9.29a.5.5 0 0 0 .5-.5V8.3a.52.52 0 0 0 .35.14.51.51 0 0 0 .36-.15.49.49 0 0 0-.02-.69ZM6.38 13V8.92h3V13Zm5.76 0H10.4V8.42a.51.51 0 0 0-.5-.5h-4a.51.51 0 0 0-.5.5V13H3.85V7.31L8 3.2l4.14 4.11Z" data-name="Layer 2"></path>
  </Icon>
);

export const HomeButton = () => {
  const { pathname, router } = useURL();

  const goHome = () => {
    router.replace('/');
  }

  if (pathname === '/') {
    return null;
  }

  return (
    <Box
      position="fixed"
      bottom="2rem"
      right="2rem"
      zIndex="1"
    >
      <Button
        onClick={goHome}
        colorScheme="blue"
        size="md"
        leftIcon={<HomeIcon />}
        boxShadow="md"
      >
        Home page
      </Button>
    </Box>
  );
};
