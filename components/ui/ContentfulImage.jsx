import Image from 'next/image';

const contentfulLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

const ContentfulImage = (props) => {
  return (
    <Image
      loader={contentfulLoader}
      src={props.src}
      alt={props.alt}
      layout="fill"
      style={{ objectFit: 'cover' }}
    />
  );
};
// {...props}
export default ContentfulImage;
