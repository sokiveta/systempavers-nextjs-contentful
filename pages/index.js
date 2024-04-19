import React from 'react';
import { client } from '@/lib/contentful/client';
import PostCard from '@/components/posts/PostCard';
import FeaturedPostCard from '@/components/posts/FeaturedPostCard';

const Posts = ({ posts }) => {
  return (
    <section className="section">
      <div className="container">
        <h1>System Pavers Outdoor Living Blog</h1>
        {posts.map(
          (post, i) =>
            i > 0 || <FeaturedPostCard key={post.fields.slug} post={post} />
        )}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-10">
          {posts.map(
            (post, i) =>
              i > 0 && <PostCard key={post.fields.slug} post={post} />
          )}
        </ul>
      </div>
    </section>
  );
};

export const getStaticProps = async () => {
  const response = await client.getEntries({ content_type: 'post' });
  return {
    props: {
      posts: response.items,
      revalidate: 60,
    },
  };
};

export default Posts;
