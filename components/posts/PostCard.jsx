import React from 'react';
import Link from 'next/link';
import ContentfulImage from '@/components/ui/ContentfulImage';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PostCard = ({ post }) => {
  const { title, slug, publishedDate, heroImage, excerpt } = post.fields;
  const contentfulLoader = ({ src, width, quality }) => {
    return `${src}?&w=${width}&q=${quality || 75}`;
  };
  return (
    <li className="rounded-md overflow-hidden shadow-md">
      <Link href={`/${slug}`} aria-label={title}>
        <div className="mb-2 w-full relative h-56">
          <ContentfulImage alt={`${title}`} src={heroImage.fields.file.url} />
        </div>
        <div className="p-4">
          <h3>{title}</h3>
          <p className="text-base mb-4">{excerpt.substring(0, 147)}...</p>
          <p className="text-base mb-4 text-center text-teal-600">
            Read More{' '}
            <FontAwesomeIcon icon={faArrowRight} className="text-teal-600" />
          </p>
        </div>
      </Link>
    </li>
  );
};

export default PostCard;
