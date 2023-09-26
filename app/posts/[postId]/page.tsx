import { getCommentsByPostId } from '@/api/comments';
import { BackButton } from '@/components/BackButton';
import { CommentsList } from '@/components/CommentsList';
import { Title } from '@/components/Title';

type Props = {
  params: {
    postId: string;
  };
}

async function PostCommentsPage({ params }: Props) {
  const { postId } = params;

  const comments = await getCommentsByPostId(postId);

  return (
    <>
      <Title>Comments for post {postId}</Title>
      <BackButton />
      <CommentsList comments={comments} />
    </>
  );
};

export default PostCommentsPage;
