import {Switch, Route} from "react-router-dom";
import Topics from "./topics/topics.page";
import Gallery from "./gallery/gallery.page";
import Home from "./home/home.page";


export default function Pages() {
return(
    <Switch>
        <Route path="/gallery" component={Gallery} />
        <Route path="/topics" component={Topics} />
        <Route exact path="/"><Home /></Route>
        <Route path=''><h1>404</h1></Route>
    </Switch>
);
}