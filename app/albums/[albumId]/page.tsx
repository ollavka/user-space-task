import { getPhotosByAlbumId } from '@/api/photos';
import { AlbumPhotos } from '@/components/AlbumPhotos';
import { BackButton } from '@/components/BackButton';
import { Title } from '@/components/Title';

type Props = {
  params: {
    albumId: string;
  };
}

async function AlbumPage({ params }: Props) {
  const { albumId } = params;

  const photos = await getPhotosByAlbumId(albumId);

  return (
    <>
      <Title>Photos for album {albumId}</Title>
      <BackButton />
      <AlbumPhotos photos={photos} />
    </>
  );
};

export default AlbumPage;
