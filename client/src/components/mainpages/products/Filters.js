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
    const selectedCategoryObject = categories.find((cat) => cat._id === selectedCategory);
    setSubcategories(selectedCategoryObject?.subcategory || []);
    setSubcategory('');
  };

  return (
    <div className="mt-6 p-4 text-slate-900 rounded-2xl glass">

      {/* Search Input */}
      <div className="flex justify-center mb-4">
        <input
          type="text"
          value={search}
          placeholder="Search products here"
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          className="border rounded-md px-3 py-1 w-full text-center"
        />
      </div>

      {/* Filter Section */}
      <div className="flex flex-col md:flex-row">
        <div className="font-medium">Filter by:</div>

        {/* Category Dropdown */}
        <select
          name="category"
          value={category}
          onChange={handleCategory}
          className="border rounded-md px-2 py-1 mb-2 md:mb-0 md:mr-2 w-full md:w-44"
        >
          <option value="">All Products</option>
          {categories.map((category) => (
            <option value={category._id} key={category._id}>
              {category.name}
            </option>
          ))}
        </select>

        {/* Subcategory Section */}
        {category !== "" && (
          <select
            name="subcategory"
            value={subcategory}
            onChange={(e) => setSubcategory(e.target.value)}
            className="border rounded-md px-2 py-1 mb-2 md:mb-0 md:mr-2 w-full md:w-44"
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
        <div className="flex flex-col md:flex-row ml-auto w">
          <span className="font-medium mb-2 md:mb-0 md:mr-2">Sort By:</span>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="border rounded-md px-2 py-1 w-full md:w-44"
          >
            <option value="">Newest</option>
            <option value="sort=oldest">Oldest</option>
            <option value="sort=-price">Price: High-Low</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Filters;
