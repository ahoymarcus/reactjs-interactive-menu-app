import React from 'react';



const Categories = ({ categories, filterItems }) => {

  const renderCategory = categories.map((category, idx) => {
    return <button key={idx} type="button" className="filter-btn" onClick={() => filterItems(category.toLowerCase())} >{category}</button>
  });



  return (
    <div className="btn-container" >
      {renderCategory}
    </div>
  );
};




export default Categories;


