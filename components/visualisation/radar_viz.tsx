import React, { useState } from "react";
import CohortRadarChart from "./features_radar";

const transformDataForRadar = (dataObj?: Record<string, any>) => {
  if (!dataObj) return [];

  return Object.entries(dataObj)
    .map(([key, value]) => {
      if (typeof value === "string" || typeof value === "number") {
        return {
          subject: key,
          value: parseFloat(value.toString()),
        };
      }
      return null;
    })
    .filter((item) => item !== null);
};

const RadarVisualization = ({ currentData, selectedCategory }) => {
  const categoryDataMap = {
    "Intent": currentData?.generalEmotions,
    "Product": currentData?.productInterest,
    "Character": currentData?.characterInterests,
  };

  const radarData = transformDataForRadar(categoryDataMap[selectedCategory]);

  return (
    <div className="flex flex-col w-full">
      <CohortRadarChart data={radarData} />
    </div>
  );
};

export default RadarVisualization;
