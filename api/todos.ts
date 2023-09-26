import type { Todo } from '@/types';
import { client } from '@/utils/fetchClient';

export const getTodosByUserId = (userId: string) => {
  return client.get<Todo[]>(`/users/${userId}/todos`);
};
