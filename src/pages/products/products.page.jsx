import React from "react";
import {useParams} from "react-router-dom";

export default function Product(){
    let {productId} = useParams();
    return <h1>You are in Product: {productId}</h1>
}