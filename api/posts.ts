import type { Post } from '@/types';
import { client } from '@/utils/fetchClient';

export const getPostsByUserId = (userId: string) => {
  return client.get<Post[]>(`/users/${userId}/posts`);
};
