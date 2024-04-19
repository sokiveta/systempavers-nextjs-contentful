import React from 'react';
import Link from 'next/link';
import ContentfulImage from '../ui/ContentfulImage';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FeaturedPostCard = ({ post }) => {
  const { title, slug, heroImage, excerpt } = post.fields;
  return (
    <div className="rounded-md overflow-hidden shadow-md mb-10">
      <Link href={`/${slug}`} aria-label={title}>
        <div className="mb-2 w-full relative h-80">
          <ContentfulImage alt={`${title}`} src={heroImage.fields.file.url} />
        </div>
        <div className="p-4">
          <h2>{title}</h2>
          <p className="text-base mb-4">{excerpt}</p>
          <p className="text-base mb-4 text-center text-teal-600">
            Read More{' '}
            <FontAwesomeIcon icon={faArrowRight} className="text-teal-600" />
          </p>
        </div>
      </Link>
    </div>
  );
};

export default FeaturedPostCard;
