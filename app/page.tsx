"use client";

import Image from "next/image";
import React, { useState, FC } from "react";
// import cohorts from '../components/mock_data.tsx';

import Footer from "../components/footer";
import cohorts from "@/components/mock_data";

const MovieDisplay = ({
  movies,
  onChangeMovie,
  setSliderValue,
  stepSize,
  sliderValue,
}) => {
  const [selectedMovie, setSelectedMovie] = useState("star-wars");

  const handleMovieChange = (event) => {
    setSelectedMovie(event.target.value);
    onChangeMovie(event.target.value);
  };

  const movieDetails = movies[selectedMovie];

  return (
    <div className="flex flex-col items-center col-span-2 lg:col-span-1">
      {/* Dropdown for movie selection */}

      <p className="mb-4 lg:mb-8 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        Get started by moving the slider for&nbsp;
        <code className="font-mono font-bold">
          <select
            value={selectedMovie}
            onChange={handleMovieChange}
            className="mb-4"
          >
            {Object.keys(movies).map((movieKey) => (
              <option value={movieKey} key={movieKey}>
                {movies[movieKey].displayName}
              </option>
            ))}
          </select>
        </code>
      </p>

      <div className="mb-4 lg:mb-8 flex justify-center w-full">
        <Image
          src={movieDetails.imagePath}
          alt={movieDetails.displayName}
          width={360}
          height={540}
        />
      </div>

      <MovieSlider
        onChange={setSliderValue}
        step={stepSize}
        value={sliderValue}
      />
    </div>
  );
};

const MovieSlider: FC<{
  value: number;
  onChange: (value: number) => void;
  stepSize: number;
}> = ({ value, onChange, stepSize }) => (
  <div className="mb-4 lg:mb-8">
    <input
      type="range"
      min="0"
      max="100"
      step={stepSize}
      value={value}
      onChange={(e) => onChange(parseInt(e.target.value, 10))}
    />
  </div>
);

const CohortSelector: FC<{
  value: string;
  onChange: (cohort: string) => void;
}> = ({ value, onChange }) => {
  return (
    <div className="mb-4 lg:mb-8">
      <label
        htmlFor="cohort"
        className="block text-sm font-medium text-gray-700"
      >
        Select Customer Cohort
      </label>
      <select
        id="cohort"
        name="cohort"
        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {Object.keys(cohorts).map((cohortKey) => (
          <option key={cohortKey} value={cohortKey}>
            {cohorts[cohortKey].title}
          </option>
        ))}
      </select>
    </div>
  );
};

const CustomerCohortEmotions = ({ currentTimePeriod, currentData }) => {
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


const CharacterInterests = ({ currentData }) => {
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

const ProductInterest = ({ currentData }) => {
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

const RottenTomatoesPredictions = ({ currentData }) => {
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

const CohortInfo = ({ selectedCohort, onChange, currentTimePeriod, currentData }) => {
  return (
    <div className="flex flex-col space-y-8 lg:space-y-4 w-full">
      <CohortSelector value={selectedCohort} onChange={onChange} />
      <div className="grid grid-cols-2 gap-8 lg:gap-12 w-full">
        <div className="space-y-32 lg:space-y-12">
        <RottenTomatoesPredictions currentData={currentData} className="w-full h-auto"/>

          <CustomerCohortEmotions
            currentTimePeriod={currentTimePeriod}
            currentData={currentData}
            className="w-full h-auto"
          />
         
        </div>
        <div className="space-y-8 lg:space-y-12">
          <ProductInterest currentData={currentData} className="w-full h-auto"/>
          <CharacterInterests currentData={currentData} className="w-full h-auto"/>
        </div>
      </div>
    </div>
  );
}



const moviesData = {
  "star-wars": {
    displayName: "Star Wars",
    imagePath: "/star-wars.jpeg",
  },
};

function MovieComponent() {
  const [sliderValue, setSliderValue] = useState(50); // initialized state for the slider
  const [selectedCohort, setSelectedCohort] = useState(
    "26-35-males-entertainment"
  );
  const [selectedMovie, setSelectedMovie] = useState("star-wars");

  const movies = {
    "star-wars": {
      displayName: "Star Wars",
      imagePath: "/star-wars.jpeg",
    },
  };

  const handleMovieChange = (e) => {
    setSelectedMovie(e.target.value);
    // onChangeMovie(e.target.value);
  };

  // Helper function to calculate the current time period based on the slider value
  const getCurrentTimePeriod = () => {
    const timeSegments = Object.keys(cohorts[selectedCohort].timePeriods);
    const segmentLength = 100 / timeSegments.length;
    const currentIndex = Math.floor(sliderValue / segmentLength);
    return timeSegments[currentIndex];
  };

  const currentTimePeriod = getCurrentTimePeriod();
  const currentData = cohorts[selectedCohort].timePeriods[currentTimePeriod];

  const timeSegments = Object.keys(cohorts[selectedCohort].timePeriods);
  const stepSize = 100 / timeSegments.length; // Calculate the step size

  return (
    <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex flex-col">
      {/* Slider instruction */}

      <div className="grid grid-cols-2 gap-x-4 lg:mb-8">
        {/* Main content grid */}
        <div>
        <MovieDisplay
          movies={movies}
          onChangeMovie={handleMovieChange}
          setSliderValue={setSliderValue}
          stepSize={stepSize}
          sliderValue={sliderValue}
        />
        </div>

        {/* Right Column: Cohort Information - Increased spacing */}
        <div className="flex flex-col space-y-8 lg:space-y-4">
        <CohortInfo 
    selectedCohort={selectedCohort} 
    onChange={setSelectedCohort} 
    currentTimePeriod={currentTimePeriod} 
    currentData={currentData}
/>

          
        </div>


      </div>

      <Footer />
    </div>
  );
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <Header/> */}

      {/* <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]"> */}
      <MovieComponent />
    </main>
  );
}
