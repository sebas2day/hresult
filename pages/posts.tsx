import {PostsOrPages} from "@tryghost/content-api";
import {GetStaticPropsContext} from "next";
import Link from "next/link";
import {getPosts} from "../api/posts";

export default function Post({ posts }: { posts: PostsOrPages }) {
  return (
    <div>
      {posts.map(post => 
        <>
          <div>
            <Link href={`/[slug]`} as={`/${post.slug}`}>
              <a>{post.title}</a>
            </Link>
          </div>
        </>
      )}
    </div>
  )
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const posts = await getPosts();
  return {
    props: { posts }
  }
}
