import { Switch, Route } from "react-router-dom";
import Products from './products/products.component';
import Product from './product-details/product.component';
import Home from './home/home.page';
import NotFound from './404/404.page';


export default function PagesURL(props) {
    return (
        <Switch>
            <Route component={Products}     exact   path="/products" />
            <Route component={Product}              path="/products/:productId" />
            <Route component={Home}         exact   path="/" />
            <Route component={NotFound}             path=""  />
        </Switch>
    );
} 