import React from 'react';
import {
    AdvancedImage,
    lazyload,
    responsive,
    placeholder,
} from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';
import { scale } from '@cloudinary/url-gen/actions/resize';
import classes from './OptimizedImage.module.css';

export default function OptimizedImage({ src, alt }) {
    const cld = new Cloudinary({
        cloud: {
            cloudName: 'bytesideone',
        },
    });

    // If the src were not provided, use the placeholder image
    if (
        typeof src !== 'string' ||
        src.startsWith('http://') ||
        src.startsWith('https://')
    ) {
        src = 'placeholder-image-169-1080_mvmbrm';
    }

    // Retrieve the image with selected quality and format
    let image = cld.image(`blog/${src}`).quality('auto').format('auto');

    // Apply for image transformation
    // image.resize(
    //     scale()
    //         .width(imageWidth)
    //         .height(imageHeight)
    //         .gravity(autoGravity())
    // );

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
