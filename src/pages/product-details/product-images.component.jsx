import React from 'react';

export default (images) => {
    <div>
        {
            images.map(
                image => {
                    <img src={image.src} alt={image.alt} />
                })
        }
    </div>
}
