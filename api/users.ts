import type { User } from '@/types';
import { client } from '@/utils/fetchClient';

export const getUsers = () => {
  return client.get<User[]>('/users');
}

export const getUserById = (id: string) => {
  return client.get<User>(`/users/${id}`);
}
