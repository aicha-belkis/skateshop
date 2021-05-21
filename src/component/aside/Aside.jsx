import React from 'react';
import '../product/product.css';
import './aside.css'
import { BestSeller } from './BestSeller';
import { Category } from './category/Category';
import { Filter } from './Filter';
import { PriceRange } from './PriceRange';
export default function Aside() {
    return (
        <div>

            <Category />
            <PriceRange />
            <Filter />
            <BestSeller />
            
        </div>

    )
}