import type { Album } from '@/types';
import { client } from '@/utils/fetchClient';

export const getAlbumsByUserId = (userId: string) => {
  return client.get<Album[]>(`/users/${userId}/albums`);
};
