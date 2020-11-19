import React from 'react';
import { useParams } from 'react-router-dom';


export default () => {
    return(<h1>Product: <small>{useParams().productId}</small></h1>);
}
