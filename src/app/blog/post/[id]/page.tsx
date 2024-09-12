import { Post } from '@/app/lib/definition';
import { posts } from '@/app/lib/placeholder-data';
import PostComponent from '@/app/ui/components/posts/Post';

export default function Page({ params }: { params: { id: string } }) {
  const post = posts.find((post) => post.id === params.id) as Post;
  return (
    <>
      <h1>Post</h1>
      <PostComponent {...post} />
    </>)
}