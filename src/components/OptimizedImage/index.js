import React from "react";
import PropTypes from "prop-types";
import {
  AdvancedImage,
  lazyload,
  responsive,
  placeholder,
} from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import classes from "./OptimizedImage.module.css";

// Cloudinary instance created outside the function to avoid recreation on each render.
const cld = new Cloudinary({
  cloud: {
    cloudName: "bytesideone",
  },
});

const getImageSource = (src) => {
  // If src is a Cloudinary link, convert it to use Cloudinary API instead of link.
  if (
    typeof src === "string" &&
    src.startsWith("https://res.cloudinary.com/bytesideone/image/upload/")
  ) {
    const parts = src.split("/blog/");
    return parts.length > 1 ? parts[1] : "placeholder-image-169-1080_mvmbrm";
  }

  // If src is a valid URL, but not from Cloudinary, use placeholder image.
  if (src.startsWith("http://") || src.startsWith("https://")) {
    return "placeholder-image-169-1080_mvmbrm";
  }

  // Otherwise, return the original src
  return src;
};

export default function OptimizedImage({ src, alt }) {
  const imgSrc = getImageSource(src);

  // Retrieve the image with selected quality and format
  const image = cld.image(`blog/${imgSrc}`).quality("auto").format("auto");

  return (
    <div className={classes.container} style={containerStyle}>
      <AdvancedImage
        cldImg={image}
        plugins={[
          lazyload({ rootMargin: "10px", threshold: 0.1 }),
          responsive({ steps: 200 }),
          placeholder({ mode: "blur" }),
        ]}
      />
      {alt && <figcaption className={classes.imageCaption}>{alt}</figcaption>}
    </div>
  );
}

const containerStyle = {
  objectFit: "cover",
  position: "relative",
  overflow: "hidden",
  borderRadius: "10px",
};

OptimizedImage.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};
