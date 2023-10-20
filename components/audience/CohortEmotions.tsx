import React from "react";

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
    <div className="bg-white dark:bg-black p-4 rounded shadow-md">
      <h2>Rotten Tomatoes Predictions</h2>
      {predictions ? (
        <div>
          <h3>Critic Review</h3>
          <p>Percentage: {predictions.criticReview.percentage}%</p>
          <p>Confidence Score: {predictions.criticReview.confidenceScore}</p>

          <h3>Audience Review</h3>
          <p>Percentage: {predictions.audienceReview.percentage}%</p>
          <p>Confidence Score: {predictions.audienceReview.confidenceScore}</p>
        </div>
      ) : (
        <p>No rotten tomatoes predictions data available</p>
      )}
    </div>
  );
};
