import React from 'react';
import { useBlogPost } from '@docusaurus/theme-common/internal';
import OptimizedImage from '@site/src/components/OptimizedImage';

const BlogPostItemHeaderCoverImage = () => {
    const { metadata } = useBlogPost();
    const { frontMatter } = metadata;
    const { image } = frontMatter;

    return <OptimizedImage src={image} />;
    // }
}

export default BlogPostItemHeaderCoverImage
