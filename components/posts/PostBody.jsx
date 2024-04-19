import RichText from '@/components/RichText';

const PostBody = ({ post }) => {
  const { content } = post.fields;

  return (
    <div className="container">
      <RichText content={content} />
    </div>
  );
};

export default PostBody;
