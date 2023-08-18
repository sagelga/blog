import React from 'react';
import { useBlogPost } from '@docusaurus/theme-common/internal';
import OptimizedImage from '@site/src/components/OptimizedImage';
import classes from './CoverImage.module.css';

const BlogPostItemHeaderCoverImage = () => {
  const { metadata } = useBlogPost();
  const { frontMatter } = metadata;
  const { image } = frontMatter;

  const isCoverImageValidUrl = (imageUrl) => {
    //     Check if the cover image is a valid URL or a Cloudinary image ID
    if (imageUrl.startsWith('http://') || imageUrl.startsWith('https://')) {
      return true;
    }
    return false;
  };

  return (
    <>
      {
        !isCoverImageValidUrl(image) ?
          <OptimizedImage src={image} />
          : <img src={image} className={classes.container} />
      }
    </>
  );
};

export default BlogPostItemHeaderCoverImage;
