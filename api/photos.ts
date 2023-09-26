import type { Photo } from '@/types';
import { client } from '@/utils/fetchClient';

export const getPhotosByAlbumId = (albumId: string) => {
  return client.get<Photo[]>(`/albums/${albumId}/photos`);
};
