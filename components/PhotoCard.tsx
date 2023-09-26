'use client';

import { FC } from 'react';
import { Flex, Image, Text } from '@chakra-ui/react';
import { Photo } from '@/types';

type Props = {
  photo: Photo;
};

export const PhotoCard: FC<Props> = ({ photo }) => {
  return (
    <Flex
      direction="column"
      borderWidth="1px" 
      borderRadius="md"
      p={4} 
      shadow="md"
    >
      <Image src={photo.url} alt={photo.title} />
      <Text mt={2}>{photo.title}</Text>
    </Flex>
  );
};
