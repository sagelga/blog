import React from 'react';
import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';
import { scale } from '@cloudinary/url-gen/actions/resize';
import classes from './OptimizedImage.module.css'

const validImgWidthSize = [300, 500, 800, 1200];

export default function OptimizedImage({ src, alt }) {
    const cld = new Cloudinary({
        cloud: {
            cloudName: 'bytesideone',
        },
    });

    let imageWidth = window.innerWidth * (7 / 12);

    imageWidth = validImgWidthSize.reduce((acc, curr) => {
        return curr >= imageWidth && curr <= acc ? curr : acc;
    }, 1200);

    // console.log(imageWidth);

    const myImage = cld.image(`blog/${src}`)
        .quality('auto')
        .format('auto')
        .resize(scale().width(imageWidth));

    return (
        <figure className={classes}>
            <AdvancedImage cldImg={myImage} />
            <figcaption>{alt}</figcaption>
        </figure>
    );
}
