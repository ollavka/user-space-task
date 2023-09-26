import type { Comment } from '@/types';
import { client } from '@/utils/fetchClient';

export const getCommentsByPostId = (postId: string) => {
  return client.get<Comment[]>(`/posts/${postId}/comments`);
};
