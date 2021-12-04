import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product'

const products =[
    { id: 1, name: 'Shoes', description: 'Running Shoes.' , price: '€5', image: 'https://images.vans.com/is/image/VansEU/VN000D3HY28-HERO?$PDP-FULL-IMAGE$'}, 
    { id: 2, name: 'Macbook', description: 'Apple Macbook.', price: '€10', image: 'https://m.media-amazon.com/images/I/6103M3CVRrS._AC_SL1500_.jpg'}
];

const Products = () => {
    return (
        <main>
            <Grid container justify="ceneter" spacing={4}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product} />
                </Grid>
            )
            )}
            </Grid>
        </main>

    )
}

export default Products