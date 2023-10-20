"use client";

import Image from "next/image";
import React, { useState, FC } from "react";
// import cohorts from '../components/mock_data.tsx';

import Footer from "../components/footer";
import cohorts from "@/components/mock_data";
import moviesData from "@/components/mock_movies";
import MovieDisplay from "@/components/movie/movieDisplay";
import CohortSelector from "@/components/audience/cohortSelector";

import { ProductInterest,RottenTomatoesPredictions,CustomerCohortEmotions,CharacterInterests } from "@/components/audience/CohortEmotions";

const CohortInfo = ({
  selectedCohort,
  onChange,
  currentTimePeriod,
  currentData,
}) => {
  return (
    <div className="flex flex-col space-y-8 lg:space-y-4 w-full">
      <CohortSelector value={selectedCohort} onChange={onChange} />
      <div className="grid grid-cols-2 gap-8 lg:gap-12 w-full">
        <div className="space-y-32 lg:space-y-12">
          <RottenTomatoesPredictions
            currentData={currentData}
            className="w-full h-auto"
          />

          <CustomerCohortEmotions
            currentTimePeriod={currentTimePeriod}
            currentData={currentData}
            className="w-full h-auto"
          />
        </div>
        <div className="space-y-8 lg:space-y-12">
          <ProductInterest
            currentData={currentData}
            className="w-full h-auto"
          />
          <CharacterInterests
            currentData={currentData}
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};


function MovieComponent() {
  const [sliderValue, setSliderValue] = useState(50); // initialized state for the slider
  const [selectedCohort, setSelectedCohort] = useState(
    "26-35-males-entertainment"
  );
  const [selectedMovie, setSelectedMovie] = useState("star-wars");

  const movies = moviesData;

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
