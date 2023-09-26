'use client';

import { FC, useEffect } from 'react';
import { getPostsByUserId } from '@/api/posts';
import { useFetch } from '@/hooks/useFetch';
import { Loader } from './Loader';
import type { Post } from '@/types';
import { List } from './List';
import { Text } from '@chakra-ui/react';
import { ReloadButton } from './ReloadButton';
import toast from 'react-hot-toast';

type Props = {
  userId: string;
};

export const PostsList: FC<Props> = ({ userId }) => {
  const { data: posts, isLoading, error } = useFetch<Post[]>({
    req: () => getPostsByUserId(userId),
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
      <Loader text="Preparing posts..." height="40vh" />
    );
  }

  if (!isLoading && (!posts || !posts.length)) {
    return (
      <Text fontSize="4xl" fontWeight="600">
        This user has no posts yet
      </Text>
    );
  }

  return (
    <List 
      items={posts as Post[]}
      details="comments"
      linkPath="/posts" 
    />
  );
};
