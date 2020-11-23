import React from 'react';
import ProductItem from '../../components/product-item/product-item.component';

export default class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productsApiUrl:props.api_GetProducts,
            items: [],

        }
    }

    componentDidMount(){
        this.loadItems();
    }

    loadItems() {
        fetch(this.state.productsApiUrl)
            .then(response => response.json())
            .then(products => this.setState({ items: products }));
    }

    render() {
        return (
            <div>
                {
                    items.map(
                        item =>
                            <ProductItem item={item} />
                    )
                }
            </div>
        );
    }
}
