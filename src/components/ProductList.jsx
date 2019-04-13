import React from 'react'; // import react module
import Product from './Product'
import '../seed.js'
class ProductList extends React.Component {

    handleProductUpVote(productId) {
        console.log(productId + ' was upvoted.');
    }


    render() {

        // products aren’t sorted by the number of votes they have. Let’s sort them. 
        // We’ll use Array’s sort method to do so.
        // sort() mutates the original array it was called on
        const productsSorted = Seed.products.sort((a, b) => (
            b.votes - a.votes
            ));

        /*
            Array’s map method takes a function as an argument. It calls this function with each item inside of
            the array (in this case, each object inside Seed.products) and builds a new array by using the return
            value from each function call.


            Because the Seed.products array has four items, map will call this function four times, once for each
            item. When map calls this function, it passes in as the first argument an item. The return value from
            this function call is inserted into the new array that map is constructing. After handling the last item,
            map returns this new array. Here, we’re storing this new array in the variable [products]

            We pass an arrow function to map. Arrow functions were introduced in ES6
        */
        const products = productsSorted.map((product) => (
            <Product 
                id={product.id}
                title={product.title}
                description={product.description}
                url={product.url}
                votes={product.votes}
                submitterAvatarUrl={product.submitterAvatarUrl}
                productImageUrl={product.productImageUrl}
                onVote={this.handleProductUpVote}
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