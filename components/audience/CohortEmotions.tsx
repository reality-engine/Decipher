
import React from "react";


export const CustomerCohortEmotions = ({ currentTimePeriod, currentData }) => {
    return (
      <div className="bg-white dark:bg-black p-12 rounded shadow-md">
        <h2>Customer Cohort Emotions for {currentTimePeriod}</h2>
        <ul>
          {currentData && currentData.generalEmotions ? (
            Object.entries(currentData.generalEmotions).map(
              ([emotion, percentage]) => (
                <li key={emotion}>
                  {emotion}: {percentage}%
                </li>
              )
            )
          ) : (
            <li>No general emotions data available</li>
          )}
        </ul>
      </div>
    );
  };



export const CharacterInterests = ({ currentData }) => {
    return (
      <div className=" bg-white dark:bg-black p-4 rounded shadow-md">
        <h2>Character Interests</h2>
        <ul>
          {currentData && currentData.characterInterests ? (
            Object.entries(currentData.characterInterests).map(
              ([character, percentage]) => (
                <li key={character}>
                  {character}: {percentage}%
                </li>
              )
            )
          ) : (
            <li>No character interests data available</li>
          )}
        </ul>
      </div>
    );
  };
  
  export const ProductInterest = ({ currentData }) => {
    return (
      <div className=" bg-white dark:bg-black p-4 rounded shadow-md">
        <h2>Product Interest</h2>
        <ul>
          {currentData && currentData.productInterest ? (
            Object.entries(currentData.productInterest).map(
              ([product, percentage]) => (
                <li key={product}>
                  {product}: {percentage}%
                </li>
              )
            )
          ) : (
            <li>No product interest data available</li>
          )}
        </ul>
      </div>
    );
  };
  
  export const RottenTomatoesPredictions = ({ currentData }) => {
    return (
      <div className=" bg-white dark:bg-black p-4 rounded shadow-md">
        <h2>Rotten Tomatoes Predictions</h2>
        {currentData && currentData.rottenTomatoesPredictions ? (
          <div>
            <h3>Critic Review</h3>
            <p>
              Percentage:{" "}
              {currentData.rottenTomatoesPredictions.criticReview.percentage}%
            </p>
            <p>
              Confidence Score:{" "}
              {currentData.rottenTomatoesPredictions.criticReview.confidenceScore}
            </p>
  
            <h3>Audience Review</h3>
            <p>
              Percentage:{" "}
              {currentData.rottenTomatoesPredictions.audienceReview.percentage}%
            </p>
            <p>
              Confidence Score:{" "}
              {
                currentData.rottenTomatoesPredictions.audienceReview
                  .confidenceScore
              }
            </p>
          </div>
        ) : (
          <p>No rotten tomatoes predictions data available</p>
        )}
      </div>
    );
  };

