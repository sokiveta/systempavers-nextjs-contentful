import React from 'react';
import PostBody from '@/components/posts/PostBody';
import PostHeader from '@/components/posts/Postheader';
// import PreviewAlert from '@/components/ui/PreviewAlert';
import Skeleton from '@/components/ui/skeleton';
import { client, previewClient } from '@/lib/contentful/client';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Post = ({ post, preview }) => {
  const router = useRouter();
  return (
    <section className="section">
      <div>
        <article>
          {router.isFallback ? (
            <Skeleton />
          ) : (
            <>
              <PostHeader post={post} />
              <PostBody post={post} />
            </>
          )}
        </article>
      </div>
      <div className="container text-center mt-6">
        <Link href="/">
          <button className="backBtn">All Blogs Posts</button>
        </Link>
      </div>
    </section>
  );
};

export const getStaticProps = async ({ params, preview = false }) => {
  const cfClient = preview ? previewClient : client;

  const { slug } = params;
  const response = await cfClient.getEntries({
    content_type: 'post',
    'fields.slug': slug,
  });

  if (!response?.items?.length) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      post: response?.items?.[0],
      preview,
      revalidate: 60,
    },
  };
};

export const getStaticPaths = async () => {
  const response = await client.getEntries({ content_type: 'post' });
  const paths = response.items.map((item) => ({
    params: { slug: item.fields.slug },
  }));
  return { paths, fallback: true };
};

export default Post;
