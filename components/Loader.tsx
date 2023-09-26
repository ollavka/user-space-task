'use client';

import { FC } from 'react';
import { Box, AbsoluteCenter, Spinner, Flex, Text } from '@chakra-ui/react';

type Props = {
  text?: string;
  height?: string;
};

export const Loader: FC<Props> = ({ text, height = '95vh' }) => (
  <Box position="relative" h={height}>
    <AbsoluteCenter p={5}>
      <Flex alignItems="center" gap={5}>
        <Spinner size="lg" />

        {text && (
          <Text fontSize="xl">{text}</Text>
        )}
      </Flex>
    </AbsoluteCenter>
  </Box>
);
