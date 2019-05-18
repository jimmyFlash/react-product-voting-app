import React from 'react'; // import react module
import Product from './Product'
import '../seed.js'
class ProductList extends React.Component {


    // using babel's property initializer plugin, no need for the constructor invocation 
    // to define initial state
  
    state = {
        products: [],
    };
     

    constructor(props){
        super(props);

        // this.state = { products: [] };

        // this.handleProductUpVote = this.handleProductUpVote.bind(this);
    }

    // handleProductUpVote(productId) {
        // using babel's property initializer plugin, no need for the constructor invocation using arrow functions
    handleProductUpVote = (productId) => {
        console.log(productId + ' was upvoted.');
        /*
        map() to traverse the products array. Importantly, map() returns a new array as opposed
        to modifying the array this.state.products
        */
        const nextProducts = this.state.products.map((product) => {
            // if the current product matches productId. If it does, we create a new object, copying
            // over the properties from the original product object
                if (product.id === productId) {
                    //overwrite the votes property on our 
                    //new product object. We set it to the incremented vote count. We do this using Object’s assign()
                    return Object.assign({}, product, {votes: product.votes + 1,});
                } else {
                    //current product is not the one specified by productId, we return it unmodified
                    return product;
                }
            });

            this.setState({ products: nextProducts,});
    }

    // Called immediately after a component is mounted. Setting state here will trigger re-rendering.
    componentDidMount() {
        this.setState({ products: Seed.products });
    }


    render() {

        // products aren’t sorted by the number of votes they have. Let’s sort them. 
        // We’ll use Array’s sort method to do so.
        // sort() mutates the original array it was called on
        const productsSorted = this.state.products.sort((a, b) => (
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