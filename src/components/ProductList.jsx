import React from 'react';
import products from "../data";
import ProductCard from "./ProductCard";

const ProductList = ({ addCartItems }) => {
    return (
        <div className="flex flex-wrap justify-center m-4">
            {products.map(product => (
                <ProductCard key={product.id} product={product} addCartItems={addCartItems} buttonType="add" />
            ))}
        </div>
    )
}

export default ProductList;
