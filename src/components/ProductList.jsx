import React from 'react'; // import react module
import Product from './Product'
import '../seed.js'
class ProductList extends React.Component {
    render() {

        const products = Seed.products.map((product) => (
            <Product 
                id={product.id}
                title={product.title}
                description={product.description}
                url={product.url}
                votes={product.votes}
                submitterAvatarUrl={product.submitterAvatarUrl}
                productImageUrl={product.productImageUrl}
            />
        ));

        return (
            <div className="container">
                <h1>Popular products</h1>
                <hr />
                {products}
            </div>
        );
    }
}

// export our frame component. To be used in our client/index.js file
export default ProductList;