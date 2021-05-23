import {getPosts, getSinglePost} from "../api/posts";
import {PostOrPage} from "@tryghost/content-api";
import {GetStaticPaths, GetStaticProps} from 'next';
import assert from "assert";

type PostProps = { post: PostOrPage };

export default function PostPage({ post }: PostProps) {
  return (
    <div>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getPosts();
  const paths = posts.map(post => ({
    params: { slug: post.slug },
  }));
  return { paths, fallback: false };
}

export const getStaticProps: GetStaticProps<PostProps> = async ({ params }) => {
  const slug = params['slug'];
  assert(!Array.isArray(slug))
  const post = await getSinglePost(slug);
  return {
    props: { post }
  }
}
