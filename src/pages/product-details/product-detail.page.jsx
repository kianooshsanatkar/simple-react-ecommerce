import React from 'react';
import ProductImages from './product-images.component';
import ProductProperties from './dynamic-properties.component';
import { useParams } from 'react-router-dom';


export default class ProductDetail extends React.Component {
    constructor(props) {
        super(props);
        this.product = undefined;
        this.productId = useParams().productId;
    }

    componentDidMount() {
        fetch(`someURL/${this.productId}`).then(response => response.json()).then(pr => this.product = pr);
    }

    render() {
        return (
            <div>
                <ProductImages Images={product.images} />
                <h3>{product.Title}</h3>
                <ProductProperties dynamicProperties={product.properties} />
                <p>{product.Detail}</p>
            </div>
        );
    }
}
