import * as types from "./actionTypes";
import axios from 'axios';

const getProductsRquest = () => 
{
    return {
        type: types.FETCH_PRODUCTS_REQUEST,
    }
}


const getCategoryProductsRquest = () => 
{
    return {
        type: types.FETCH_CATEGORY_PRODUCTS_REQUEST,
    }
}


const getQuantityProductsRquest = () => 
{
    return {
        type: types.FETCH_QUANTITY_PRODUCTS_REQUEST,
    }
}

export const getProducts = () => (dispatch) => 
{
    dispatch(getProductsRquest());

    return axios
    .get("https://mockserverdata.herokuapp.com/products")
    .then((res) =>
    {
        // console.log(res.data);
        return dispatch
        ({
            type: types.FETCH_PRODUCTS_SUCCESS,
            payload: res.data,
        });
    })
    .catch((err) =>
    {
        return dispatch
        ({
            type: types.FETCH_PRODUCTS_FAILIURE,
        });
    })
}


export const getQueryData = (query) => async (dispatch) => {
    // console.log(query);
    dispatch(getCategoryProductsRquest());
    try {
      let data = await axios.get(`https://mockserverdata.herokuapp.com/products?q=${query}`)
       dispatch({ type: types.FETCH_CATEGORY_PRODUCTS_SUCCESS, payload: data.data });
    }
    catch (e) {
        dispatch({ type: types.FETCH_CATEGORY_PRODUCTS_FAILURE })
      console.log("e:",e);
    }
  }


  export const getQuantityProduct = (limit) => async (dispatch) => {
    // console.log(limit);
    dispatch(getQuantityProductsRquest());
    try {
      let data = await axios.get(`https://mockserverdata.herokuapp.com/products?_limit=${limit}`)
      dispatch({ type: types.FETCH_QUANTITY_PRODUCTS_SUCCESS, payload: data.data });
    }
    catch (e) {
        dispatch({ type: types.FETCH_QUANTITY_PRODUCTS_FAILURE })
      console.log("e:",e);
    }
  }

