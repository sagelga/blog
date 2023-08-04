import React from "react";

const Gallery = ({ children }) => {
    const galleryStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '1px',
        marginBottom: '20px',
    };

    return (
        <div style={galleryStyle}>
            {children}
        </div>
    )
}

export default Gallery
