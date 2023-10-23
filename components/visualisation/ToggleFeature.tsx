import React from "react";

const ToggleFeature = ({ categories, onCategoryChange, selectedCategory }) => {

  const handleClick = (category) => {
    onCategoryChange(category);
  };

  return (
    <div className="flex flex-wrap justify-center" >
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleClick(category)}
          className={
            `mx-1 my-1 text-sm py-2 px-2 rounded transition-colors duration-200 focus:outline-none 
            ${category === selectedCategory 
              ? "bg-green-700 hover:bg-green-800 text-white" 
              : "bg-blue-500 hover:bg-blue-600 text-white"}`
          }
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default ToggleFeature;
