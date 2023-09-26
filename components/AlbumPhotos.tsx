'use client';

import { FC } from 'react';
import { Grid } from '@chakra-ui/react'
import { Photo } from '@/types';
import { PhotoCard } from './PhotoCard';

type Props = {
  photos: Photo[];
};

export const AlbumPhotos: FC<Props> = ({ photos }) => {
  return (
    <Grid
      templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
      gap={4}
      mb={8}
    >
      {photos.map((photo) => (
        <PhotoCard key={photo.id} photo={photo} />
      ))}
  </Grid>
  );
};
