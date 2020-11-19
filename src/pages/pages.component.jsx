import { Switch, Route } from "react-router-dom";
import Products from './products/products.component';
import Product from './product/product.component';
import Home from './home/home.page';
import NotFound from './404/404.page';


export default function PagesURL(props) {
    return (
        <Switch>
            <Route exact path="/products" component={Products} />
            <Route path="/products/:productId" component={Product} />
            <Route exact path="/" component={Home} />
            <Route path="" component={NotFound} />
        </Switch>
    );
} 