import React,{useEffect} from "react";
import RightDivShop from "./RightDivShop";
import "./ProductPage.css";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { getProducts, getQuantityProduct, getQueryData } from "../../Redux/AppReducer/action";
import FilterCategoryWise from "../../Components/FilterCategoryWise";
import { Link } from "react-router-dom";;

const ProductPage = () => {
  const dispatch = useDispatch();
  const filterArray = useSelector((store) => store.AppReducer.products);
  const [data, setData] = useState(filterArray);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  
  const handleSort = (e) => {
    let data2 = filterArray.sort((a, b) => {
      if (e === "priceasc") {
        return a.Price - b.Price;
      } else if (e === "pricedesc") {
        return b.Price - a.Price;
      } else if (e === "nameasc") {
        return a.Name.localeCompare(b.Name);
      } else if (e === "namedesc") {
        return b.Name.localeCompare(a.Name);
      }
    });
    // console.log(data);
    setData([...data2]);
  };


  const handleSorByQuantity = (e) => {
  dispatch(getQuantityProduct(Number(e.target.value)));
  }
  
  const queryData = (elm) => {
    dispatch(getQueryData(elm));
  } 

  // console.log(filterArray.length);
  
  return (
    <div>
      <div className="heading">
        <h1>
          {
            filterArray.length === 14? "Oral Products" 
            : filterArray.length === 38? "Herbal Supplements" 
            : filterArray.length === 8? "Personal Care" 
            : "Products"
          }
          </h1>
        {/* <div>
        <Link to='/Cart' className='icons'>
          <img 
          style={{ height: '20px', width: '20px' }}
          src="https://www.linkpicture.com/q/shopping-bag.png" alt="" 
          />
        </Link>
        </div> */}
      </div>
      <div className="product-menu-dropdown-div">
        <select className="filter" 
        onChange={(e) => handleSort(e.target.value)}
        >
          <option value="Featured">Featured</option>
          <option value="BestSelling">Best Selling</option>
          <option value="nameasc">Name Ascending</option>
          <option value="namedesc">Name Descending</option>
          <option value="priceasc">Price Ascending</option>
          <option value="pricedesc">Price Descending</option>
        </select>

        <select 
        className="filter" 
        onChange={(e) => handleSorByQuantity(e)}
        >
          <option value="12">12</option>
          <option value="16">16</option>
          <option value="32">32</option>
          <option value="60">All</option>
        </select>
      </div>
      <div className="maindiv">
        <div className="sidebar_div">
          <FilterCategoryWise queryData={queryData} />
        </div>
        <div className="right_div">
          <RightDivShop data={filterArray} />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
