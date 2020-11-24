import React from 'react';

export default (params) => {
    return(
        <div>
            <img src={params.image} />
            <h4>{params.Title}</h4>
            <p>{params.shortInfo}</p>
        </div>
    );
}
