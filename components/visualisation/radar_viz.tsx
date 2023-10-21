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
    <div className="flex space-x-4">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleClick(category)}
          className={
            category === selectedCategory
              ? "bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded"
              : "bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          }
        >
          {category}
        </button>
      ))}
    </div>
  );
};

const RadarVisualization = ({ currentData }) => {
  const [selectedCategory, setSelectedCategory] = useState("Intent and Engagement");

  const categoryDataMap = {
    "Intent and Engagement": currentData?.generalEmotions,
    "Product Interest": currentData?.productInterest,
    "Character Interests": currentData?.characterInterests,
  };

  const radarData = transformDataForRadar(categoryDataMap[selectedCategory]);

  return (
    <div>
      <ToggleCohort
        categories={[
          "Intent and Engagement",
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
