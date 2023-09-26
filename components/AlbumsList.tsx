'use client';

import { FC, useEffect } from 'react';
import { getAlbumsByUserId } from '@/api/albums';
import { useFetch } from '@/hooks/useFetch';
import { Loader } from './Loader';
import type { Album } from '@/types';
import { Text } from '@chakra-ui/react';
import { List } from './List';
import toast from 'react-hot-toast';
import { ReloadButton } from './ReloadButton';

type Props = {
  userId: string;
};

export const AlbumsList: FC<Props> = ({ userId }) => {
  const { data: albums, isLoading, error } = useFetch<Album[]>({
    req: () => getAlbumsByUserId(userId),
    startValue: [],
  });

  useEffect(() => {
    if (!error?.message) {
      return;
    }

    toast.error(error.message);
  }, [error?.message]);

  if (error) {
    return (
      <>
        <Text
          fontSize="2xl"
          fontWeight="600"
          color="red.400"
          mt={10}
        >
          Oops! Something went wrong
        </Text>
        <ReloadButton />
      </>
    )
  }

  if (isLoading) {
    return (
      <Loader text="Preparing albums..." height="40vh" />
    );
  }

  if (!isLoading && (!albums || !albums.length)) {
    return (
      <Text fontSize="4xl" fontWeight="600">
        This user has no albums yet
      </Text>
    );
  }

  return (
    <List 
      items={albums as Album[]}
      details="photos"
      linkPath="/albums" 
    />
  );
};
