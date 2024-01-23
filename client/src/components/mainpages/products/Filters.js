import React, { useState, useContext, useEffect } from 'react';
import { GlobalState } from '../../../GlobalState';

function Filters() {
  const state = useContext(GlobalState);
  const [categories] = state.categoriesAPI.categories;
  const [subcategories, setSubcategories] = useState([]);
  const [category, setCategory] = state.productsAPI.category;
  const [search, setSearch] = state.productsAPI.search;
  const [subcategory, setSubcategory] = state.productsAPI.subcategory;
  const [sort, setSort] = state.productsAPI.sort;
  const [condition, setCondition] = state.productsAPI.condition;

  useEffect(() => {
    // Find the selected category object
    const selectedCategoryObject = categories.find((cat) => cat._id === category);

    // Update subcategories based on the selected category
    setSubcategories(selectedCategoryObject?.subcategory || []);

    // If the selected subcategory is not in the updated list, reset it to an empty string
    if (!selectedCategoryObject?.subcategory.includes(subcategory)) {
      setSubcategory('');
    }
  }, [category, categories, subcategory]);

  const handleCategory = (e) => {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);
  };

  // return (
  //   <div className="mt-6 p-4 text-slate-900 rounded-2xl bg-[#c5c5c5]">

  //     {/* Search Input */}
  //     <div className="flex justify-center mb-4">
  //       <input
  //         type="text"
  //         value={search}
  //         placeholder="Search here"
  //         onChange={(e) => setSearch(e.target.value.toLowerCase())}
  //         className="border rounded-md px-3 py-1 w-full text-center"
  //       />
  //     </div>

  //     {/* Filter Section */}
  //     <div className="flex flex-col md:flex-row">
  //       <div className="font-medium">Filter by:</div>

  //       {/* Category Dropdown */}
  //       <select
  //         name="category"
  //         value={category}
  //         onChange={handleCategory}
  //         className="border rounded-md px-2 py-1 mb-2 md:mb-0 md:mr-2 w-full md:w-44"
  //       >
  //         <option value="">All Products</option>
  //         {categories.map((category) => (
  //           <option value={category._id} key={category._id}>
  //             {category.name}
  //           </option>
  //         ))}
  //       </select>

  //       {/* Subcategory Section */}
  //       {category !== "" && (
  //         <select
  //           name="subcategory"
  //           value={subcategory}
  //           onChange={(e) => setSubcategory(e.target.value)}
  //           className="border rounded-md px-2 py-1 mb-2 md:mb-0 md:mr-2 w-full md:w-44"
  //         >
  //           <option value="">All Subcategories</option>
  //           {subcategories.map((subcat) => (
  //             <option value={subcat} key={subcat}>
  //               {subcat}
  //             </option>
  //           ))}
  //         </select>
  //       )}
    

  //       {/* Sort Section */}
  //       <div className="flex flex-col md:flex-row ml-auto w">
  //         <span className="font-medium mb-2 md:mb-0 md:mr-2">Sort By:</span>
  //         <select
  //           value={sort}
  //           onChange={(e) => setSort(e.target.value)}
  //           className="border rounded-md px-2 py-1 w-full md:w-44"
  //         >
  //           <option value="">Newest</option>
  //           <option value="sort=oldest">Oldest</option>
  //           <option value="sort=-price">Price: High-Low</option>

  //         </select>
  //       </div>

          

  //     </div>
  //   </div>
  // );

  return (
    <div className="mt-10 ml-4 mr-4 flex flex-wrap justify-between rounded-2xl p-4 bg-gray-200 text-slate-900">
    <div className="flex flex-wrap items-center gap-4">
      <span className="font-medium">Filters: </span>
      <select
        name="category"
        value={category}
        onChange={handleCategory}
        className="border rounded-md w-40 px-2 py-1"
      >
        <option value="">All Products</option>
        {categories.map((category) => (
          <option value={category._id} key={category._id} selected={category.name === 'Mobile Phones'}>
            {category.name}
          </option>
        ))}
      </select>

      {/* Add Subcategory dropdown */}
      {subcategories.length > 0 && (
        <select
          name="subcategory"
          value={subcategory}
          onChange={(e) => setSubcategory(e.target.value)}
          className="border rounded-md w-40 px-2 py-1"
        >
          <option value="">All Brands</option>
          {subcategories.map((subcat) => (
            <option value={subcat} key={subcat}>
              {subcat}
            </option>
          ))}
        </select>
      )}
    </div>

      <div className="flex items-center gap-4">
        <input
          type="text"
          value={search}
          placeholder="Search Here!"
          onChange={e => setSearch(e.target.value.toLowerCase())}
          className="border rounded-md px-2 py-1"
        />
      </div>

             {/* Radio buttons for condition */}
       <div className="flex items-center gap-5">
        <span className="font-medium"></span>
        <label>
          <input
            type="radio"
            value="brandNew"
            checked={condition === 'Brand New'}
            onChange={() => setCondition('Brand New')}
          />
          Brand New
        </label>
        <label>
          <input
            type="radio"
            value="used"
            checked={condition === 'Used'}
            onChange={() => setCondition('Used')}
          />
          Used
        </label>
      </div>

              <div className="row sort">
                 <span className="font-medium">Sort By: </span>
                <select value={sort} onChange={e => setSort(e.target.value)} className="border rounded-md px-2 py-1">

                     <option value=''>Newest</option>
                    <option value='sort=oldest'>Oldest</option>
                    <option value='sort=-price'>Price: Hight-Low</option>
                </select>
             </div> 
    </div>


  );

}

export default Filters;
