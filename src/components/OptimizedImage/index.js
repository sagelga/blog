import React from 'react';
import PropTypes from 'prop-types';
import {
  AdvancedImage,
  lazyload,
  responsive,
  placeholder,
} from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';
//import { scale } from '@cloudinary/url-gen/actions/resize';
import classes from './OptimizedImage.module.css';

// Cloudinary instance created outside the function.
const cld = new Cloudinary({
  cloud: {
    cloudName: 'bytesideone',
  },
});

export default function OptimizedImage({ src, alt }) {
  // If the src were not provided, use the placeholder image
  const imgSrc = (typeof src !== 'string' || src.startsWith('http://') || src.startsWith('https://')) ?
    'placeholder-image-169-1080_mvmbrm' : src;

  // Retrieve the image with selected quality and format
  let image = cld.image(`blog/${imgSrc}`).quality('auto').format('auto');

  return (
    <div
      className={classes.container}
      style={{
        objectFit: 'cover',
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '10px',
      }}
    >
      <AdvancedImage
        cldImg={image}
        plugins={[
          lazyload({ rootMargin: '10px', threshold: 0.1 }),
          responsive({ steps: 200 }),
          placeholder({ mode: 'blur' }),
        ]}
      />
      {alt && (
        <figcaption className={classes.imageCaption}>{alt}</figcaption>
      )}
    </div>
  );
}

OptimizedImage.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};