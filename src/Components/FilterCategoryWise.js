import  "../pages/Products/ProductPage.css"

const FilterCategoryWise = ({queryData}) => {

  return (
    <div>
      <ul className="sidebarFilter">
      <li style={{ color: 'black', fontWeight: "800", marginBottom: '1rem' }} onClick={() => queryData('products')}>Health Category</li>
      <li onClick={() => queryData('Herbal Supplements')}>Herbal Supplements</li>
      <li onClick={() => queryData('Oral Care')}>Oral Care</li>
      <li onClick={() => queryData('Personal Care')}>Personal Care</li>
      </ul>
    </div>
  );
};

export default FilterCategoryWise;
