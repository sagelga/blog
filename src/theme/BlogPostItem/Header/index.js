import React from 'react';
import BlogPostItemHeaderCoverImage from '../Header/CoverImage';
import BlogPostItemHeaderTitle from '@theme/BlogPostItem/Header/Title';
import BlogPostItemHeaderInfo from '@theme/BlogPostItem/Header/Info';
import BlogPostItemHeaderAuthors from '@theme/BlogPostItem/Header/Authors';
export default function BlogPostItemHeader() {
    return (
        <header>
            <BlogPostItemHeaderCoverImage />
            <BlogPostItemHeaderTitle />
            <BlogPostItemHeaderInfo />
            <BlogPostItemHeaderAuthors />
        </header>
    );
}
