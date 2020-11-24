import React from 'react';
import ProductImages from './product-image.component';
import ProductProperties from './dynamic-properties.component';
import { useParams } from 'react-router-dom';


export default class ProductDetail extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            product: undefined,
            productId: useParams().productId,
        }
    }

    componentDidMount() {
        fetch(`someURL/${productId}`).then(response => response.json()).then(pr => product = pr);
    }
    
    render() {
        return (
            <div>
                <ProductImages Images={params.images} />
                <h3>{params.Title}</h3>
                <ProductProperties dynamicProperties={params.properties} />
                <p>{params.Detail}</p>
            </div>
        );
    }
}
