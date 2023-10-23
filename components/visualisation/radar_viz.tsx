import React, { useState } from "react";
import CohortRadarChart from "./features_radar";

const transformDataForRadar = (dataObj?: Record<string, any>) => {
    if (!dataObj) return [];

    return Object.entries(dataObj).map(([key, value]) => {
      if (typeof value === 'string' || typeof value === 'number') {
        return {
          subject: key,
          value: parseFloat(value.toString())
        };
      }
      return null;
    }).filter(item => item !== null);
  };


const ToggleCohort = ({ categories, onCategoryChange }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleClick = (category) => {
    onCategoryChange(category);
    setSelectedCategory(category);
  };

  return (
    <div className=" flex   mx-4">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleClick(category)}
          className={
            category === selectedCategory
              ? "bg-green-700 hover:bg-green-800 text-white text-sm mb-2 py-2 px-2 rounded"
              : "bg-blue-500 hover:bg-blue-600 text-white text-sm mb-2 py-2 px-2 rounded"
          }
        >
          {category}
        </button>
      ))}
    </div>
  );
};
const RadarVisualization = ({ currentData }) => {
  const [selectedCategory, setSelectedCategory] = useState("Intent & Engagement");

  const categoryDataMap = {
    "Intent & Engagement": currentData?.generalEmotions,
    "Product Interest": currentData?.productInterest,
    "Character Interests": currentData?.characterInterests,
  };

  const radarData = transformDataForRadar(categoryDataMap[selectedCategory]);

  return (
    <div className="flex flex-col w-full">
      <ToggleCohort
        categories={[
          "Intent & Engagement",
          "Product Interest",
          "Character Interests",
        ]}
        onCategoryChange={setSelectedCategory}
      />
      <CohortRadarChart data={radarData} />
    </div>
  );
};


export default RadarVisualization;
