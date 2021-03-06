import {FETCH_PRODUCTS} from './actionsTypes';

export const fetchProducts = () => async dispatch => {
  try {
    const productsJson = await fetch('/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      query: `{
        getProducts {
          image
          id
          price
          sizes
          nickname
          brand
          mainColor
        }
    }`
    })
  });
    let products = await productsJson.json();
    products = products.data.getProducts;

    return dispatch({
      type: FETCH_PRODUCTS,
      payload: products
    });
  } catch (error) {
    throw error;
  }
}
