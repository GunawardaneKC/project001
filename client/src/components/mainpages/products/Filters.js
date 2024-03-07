import React, { useState, useContext, useEffect } from 'react';
import { GlobalState } from '../../../GlobalState';
import { styled } from '@mui/material/styles';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

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

  useEffect(() => {
    // Save condition filter to localStorage whenever it changes
    localStorage.setItem('condition', condition);
  }, [condition]);

  const handleCategory = (e) => {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);
  };
  
  const BpIcon = styled('span')(({ theme }) => ({
    borderRadius: '50%',
    width: 16,
    height: 16,
    boxShadow:
      theme.palette.mode === 'dark'
        ? '0 0 0 1px rgb(16 22 26 / 40%)'
        : 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor: theme.palette.mode === 'dark' ? '#394b59' : '#f5f8fa',
    backgroundImage:
      theme.palette.mode === 'dark'
        ? 'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))'
        : 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    '.Mui-focusVisible &': {
      outline: '2px auto rgba(19,124,189,.6)',
      outlineOffset: 2,
    },
    'input:hover ~ &': {
      backgroundColor: theme.palette.mode === 'dark' ? '#30404d' : '#ebf1f5',
    },
    'input:disabled ~ &': {
      boxShadow: 'none',
      background:
        theme.palette.mode === 'dark' ? 'rgba(57,75,89,.5)' : 'rgba(206,217,224,.5)',
    },
  }));
  
  const BpCheckedIcon = styled(BpIcon)({
    backgroundColor: '#137cbd',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&::before': {
      display: 'block',
      width: 16,
      height: 16,
      backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
      content: '""',
    },
    'input:hover ~ &': {
      backgroundColor: '#106ba3',
    },
  });

  function BpRadio(props) {
    return (
      <Radio
        disableRipple
        color="default"
        checkedIcon={<BpCheckedIcon />}
        icon={<BpIcon />}
        {...props}
      />
    );
  }

  return (
    <div className="mt-10 ml-4 mr-4 flex flex-wrap justify-between rounded-3xl p-4 bg-gray-200 text-slate-900">
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

      {/* Radio buttons for condition */}
      {/* {category === 'Mobile Phones' && (
        <div className="flex items-center gap-5 mt-1">
          <span className="font-medium">Condition:</span>
          <label style={{ display: 'flex', alignItems: 'center' }}>
            <input
              type="radio"
              value="brandNew"
              checked={condition === 'Brand New'}
              onChange={() => setCondition('Brand New')}
              style={{ marginRight: '10px' }}
            />
            Brand New
          </label>
          <label style={{ display: 'flex', alignItems: 'center' }}>
            <input
              type="radio"
              value="used"
              checked={condition === 'Used'}
              onChange={() => setCondition('Used')}
              style={{ marginRight: '10px' }}
            />
            Used
          </label>
        </div>
      )} */}

<FormControl>
      {/* <FormLabel id="demo-customized-radios">Condition:</FormLabel> */}
      <RadioGroup
        defaultValue="female"
        aria-labelledby="demo-customized-radios"
        name="customized-radios"
      >
        <FormControlLabel value="brandnew" control={<BpRadio />} checked={condition === 'Brand New'} onChange={() => setCondition('Brand New')} label="Brand New" />
        <FormControlLabel value="used" control={<BpRadio />} checked={condition === 'Used'} onChange={() => setCondition('Used')} label="Used" />
      </RadioGroup>
    </FormControl>
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

              <div className="row sort mt-4">
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
