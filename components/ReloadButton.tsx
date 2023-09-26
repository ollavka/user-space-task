'use client';

import { Button } from "@chakra-ui/react";

export const ReloadButton = () => {
  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <Button 
      colorScheme="green"
      onClick={reloadPage}
      mt={5}
    >
      Reload page
    </Button>
  );
};