import React, { ReactNode } from "react";
import Image from "next/image";
// Utility Function
const mapToListItems = (data: Record<string, any> | undefined, defaultMessage: string): ReactNode => {
    if (data) {
      return Object.entries(data).map(([key, value]) => (
        <li key={key}>
          {key}: {String(value)}%
        </li>
      ));
    }
    return <li>{defaultMessage}</li>;
  };

// Common UI Component
const DataDisplay = ({ title, data, defaultMessage }) => (
  <div className="bg-white dark:bg-black p-4 rounded shadow-md">
    <h2>{title}</h2>
    <ul>{mapToListItems(data, defaultMessage)}</ul>
  </div>
);

// Individual Components
export const CustomerCohortEmotions = ({ currentTimePeriod, currentData }) => {
  return (
    <DataDisplay
      title={`Customer Cohort Emotions for ${currentTimePeriod}`}
      data={currentData?.generalEmotions}
      defaultMessage="No general emotions data available"
    />
  );
};

export const CharacterInterests = ({ currentData }) => {
  return (
    <DataDisplay
      title="Character Interests"
      data={currentData?.characterInterests}
      defaultMessage="No character interests data available"
    />
  );
};

export const ProductInterest = ({ currentData }) => {
  return (
    <DataDisplay
      title="Product Interest"
      data={currentData?.productInterest}
      defaultMessage="No product interest data available"
    />
  );
};

export const RottenTomatoesPredictions = ({ currentData }) => {
  const predictions = currentData?.rottenTomatoesPredictions;

  return (
    <div className="bg-white dark:bg-black p-8 rounded shadow-md">
      <h2 className="text-xl font-semibold mb-4">Review Predictions</h2>
      {predictions ? (
        <div>
          <div className="mb-12 mr-4">
            <h3 className="text-lg font-medium mb-2">Critic Review</h3>
            <Image src={"fresh.svg"} alt="Tomatoes" width={30} height={30} />
            <div className="flex items-center">
              <span className="text-3xl font-bold text-red-500">{predictions.criticReview.percentage}%</span>
              <span className="ml-4 mr-4 mt-2 mb-2 text-gray-600">TOMATOMETER</span>
            </div>
            <p className="text-gray-500">{(predictions.criticReview.confidenceScore * 100).toFixed(1)}% confidence</p>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">Audience Review</h3>
            <Image src={"freshAudience.svg"} alt="Tomatoes" width={30} height={30} />
            <div className="flex items-center">
              <span className="text-3xl font-bold text-green-500">{predictions.audienceReview.percentage}%</span>
              <span className="ml-4 text-gray-600">AUDIENCE SCORE</span>
            </div>
            <p className="text-gray-500">{(predictions.audienceReview.confidenceScore * 100).toFixed(1)}% confidence</p>
          </div>
        </div>
      ) : (
        <p className="text-gray-500">No rotten tomatoes predictions data available</p>
      )}
    </div>
  );
};


