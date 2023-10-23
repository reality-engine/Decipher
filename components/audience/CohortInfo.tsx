import React, { useState } from "react";


import CohortSelector from "./cohortSelector";
import { RottenTomatoesPredictions } from "@/components/audience/CohortEmotions";
import RadarVisualization from "@/components/visualisation/radar_viz";
import ToggleFeature from "@/components/visualisation/ToggleFeature";

const CohortInfo = ({ selectedCohort, onChange, currentTimePeriod, currentData }) => {
  const [selectedCategory, setSelectedCategory] = useState("Intent");
  return (
    <div className="w-full">
      <CohortSelector value={selectedCohort} onChange={onChange} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
      <div className="md:col-span-2 flex flex-grow">
          <div className="bg-white rounded-lg p-16 shadow-md w-full h-full bg-gradient-to-r from-red-100 via-purple-100 to-blue-100">
            <ToggleFeature
                 categories={[
                  "Intent",
                  "Product",
                  "Character",
              ]}
              onCategoryChange={setSelectedCategory}
              selectedCategory={selectedCategory} // 
            />
            <RadarVisualization currentData={currentData} selectedCategory={selectedCategory} />
          </div>
        </div>
        <div className="md:col-span-1">
          <div className="flex flex-grow rounded-lg p-4 bg-gradient-to-r from-orange-600 via-purple-800 to-blue-900 shadow-md">
            <RottenTomatoesPredictions currentData={currentData} selectedCategory ={selectedCategory} />
          </div>
        </div>
      </div>
    </div>
  );
};


export default CohortInfo;