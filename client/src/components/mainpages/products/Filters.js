import React, { useState, useContext } from 'react';
import { GlobalState } from '../../../GlobalState';

function Filters() {
  const state = useContext(GlobalState);
  const [categories] = state.categoriesAPI.categories;
  const [subcategories, setSubcategories] = useState([]);
  const [category, setCategory] = state.productsAPI.category;
  const [search, setSearch] = state.productsAPI.search;
  const [subcategory, setSubcategory] = state.productsAPI.subcategory;
  const [sort, setSort] = state.productsAPI.sort;

  const handleCategory = (e) => {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);

    // Fetch subcategories based on the selected category
    const selectedCategoryObject = categories.find((cat) => cat._id === selectedCategory);
    setSubcategories(selectedCategoryObject?.subcategory || []);

    // Reset subcategory when changing the main category
    setSubcategory('');
  };

  return (
    <>    
   


    <div className="mt-6 p-4  text-slate-900 rounded-2xl glass">
    <div className=" flex justify-center">
          {/* Search Input */}
          <input
            type="text"
            value={search}
            placeholder="Search products Here"
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
            className="border rounded-md px-3 py-1 w-5/6 text-center"
          />
        </div>


      <div className=" flex mt-3 gap-4 ">

        <div className='font-medium'>Filter by: </div>

        {/* Category Dropdown*/}
        <select
          name="category"
          value={category}
          onChange={handleCategory}
          className="border rounded-md px-2 py-1 w-44"
        >
          <option value="">All Products</option>
          {categories.map((category) => (
            <option value={category._id} key={category._id}>
              {category.name}
            </option>
          ))}
        </select>

        {/* Subcategory Dropdown */}
        {subcategories.length > 0 && (
          <select
            name="subcategory"
            value={subcategory}
            onChange={(e) => setSubcategory(e.target.value)}
            className="border rounded-md px-2 py-1 w-44"
          >
            <option value="">All Subcategories</option>
            {subcategories.map((subcat) => (
              <option value={subcat} key={subcat}>
                {subcat}
              </option>
            ))}
          </select>
        )}

        {/* Sort Section */}
        <div className="ml-auto">
        <span className="font-medium">Sort By: </span>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="border rounded-md px-2 py-1 w-44"
        >
          <option value="">Newest</option>
          <option value="sort=oldest">Oldest</option>
          {/* <option value='sort=-sold'>Best sales</option> */}
          <option value="sort=-price">Price: High-Low</option>
        </select>
        </div>

        


      </div>

      
    </div>
    </>

  );
}

export default Filters;




