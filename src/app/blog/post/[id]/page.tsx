import { notFound } from "next/navigation";
import { Post } from '@/app/lib/definition';
import PostComponent from '@/app/ui/components/posts/Post';
import { getPosts } from "@/app/lib/data";
import { unstable_noStore as noStore } from 'next/cache'

//causes F12 console errors re: client components (and Sandy saw that error!)
export default async function Page({ params }: { params: { id: string } }) {
  noStore();
  const posts = await getPosts();
  const post = posts?.find((post) => post.id === params.id) as Post;
  if(!post) {
    notFound();
  }
  return (
    <>
      <h1>Postie</h1>
      {post && <PostComponent {...post} />}
    </>)
}