import React from 'react';
import ProductItem from '../../components/product-item/product-item.component';

export default class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
        }
    }

    componentDidMount(){
        this.loadItems();
    }

    loadItems() {
        fetch(this.props.api_GetProducts)
            .then(response => response.json())
            .then(products => this.setState({ items: products }));
    }

    render() {
        return (
            <div>
                {
                    this.state.items.map(
                        item =>
                            <ProductItem item={item} />
                    )
                }
            </div>
        );
    }
}
