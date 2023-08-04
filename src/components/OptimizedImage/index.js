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

    // Retrieve the image with selected quality and format
    let myImage = cld.image(`blog/${src}`).quality('auto').format('auto');

    // Apply for image transformation
    myImage.resize(
        scale()
        //         .width(imageWidth)
        //         .height(imageHeight)
        //         .gravity(autoGravity())
    );

    return (
        <div className={classes.container}>
            <AdvancedImage
                cldImg={myImage}
                plugins={[
                    lazyload({ rootMargin: '10px', threshold: 0.25 }),
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
