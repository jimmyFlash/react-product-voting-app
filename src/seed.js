// 
window.Seed = (function () {
    function generateVoteCount() {
      return Math.floor((Math.random() * 50) + 15);
    }
  // array that contains the data of our products. They are wrapped as a self-invoking function
  // and are attached to the window object of our browser. This way we can access them anywhere we want them
    const products = [
      {
        id: 1,
        title: 'Yellow Pail',
        description: 'On-demand sand castle construction expertise.',
        url: '#',
        votes: generateVoteCount(),
        submitterAvatarUrl: 'src/images/avatars/daniel.jpg',
        productImageUrl: 'src/images/products/image-aqua.png',
      },
      {
        id: 2,
        title: 'Supermajority: The Fantasy Congress League',
        description: 'Earn points when your favorite politicians pass legislation.',
        url: '#',
        votes: generateVoteCount(),
        submitterAvatarUrl: 'src/images/avatars/kristy.png',
        productImageUrl: 'src/images/products/image-rose.png',
      },
      {
        id: 3,
        title: 'Tinfoild: Tailored tinfoil hats',
        description: 'We already have your measurements and shipping address.',
        url: '#',
        votes: generateVoteCount(),
        submitterAvatarUrl: 'src/images/avatars/veronika.jpg',
        productImageUrl: 'src/images/products/image-steel.png',
      },
      {
        id: 4,
        title: 'Haught or Naught',
        description: 'High-minded or absent-minded? You decide.',
        url: '#',
        votes: generateVoteCount(),
        submitterAvatarUrl: 'src/images/avatars/molly.png',
        productImageUrl: 'src/images/products/image-yellow.png',
      },
    ];
  
    /*
    The Seed function eventually returns an object with a property of products and a value of products.
     This means that, if we execute Seed.products, we should have every product object returned to us.
    */
    return { products: products };
  }());
  