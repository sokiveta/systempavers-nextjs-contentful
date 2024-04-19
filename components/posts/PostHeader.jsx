import React from 'react';
import ContentfulImage from '../ui/ContentfulImage';
import DateComponent from '../ui/DateComponent';

const PostHeader = ({ post }) => {
  const { title, heroImage, publishedDate } = post.fields;

  return (
    <>
      <div className="mb-8 md:mb-16 sm:mx-0 w-full relative h-80">
        <ContentfulImage alt={`${title}`} src={heroImage.fields.file.url} />
        <h2 className="postH2">{title}</h2>
      </div>
      <div className="container">
        <div className="bg-slate-100 p-2 rounded-md">
          Published Date:{' '}
          <DateComponent
            dateString={publishedDate}
            className="text-sm font-bold text-slate-800"
          />
        </div>
      </div>
    </>
  );
};

export default PostHeader;
