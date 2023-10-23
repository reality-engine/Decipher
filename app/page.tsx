"use client";

import React, { useState, Fragment, useRef } from "react";

import OptionsModal from "@/components/Modal"; // Import the new component

import cohorts from "@/components/mock_data";
import moviesData from "@/components/mock_movies";
import MovieDisplay from "@/components/movie/movieDisplay";
import CohortInfo from "@/components/audience/CohortInfo";
import Navbar from "@/components/navbar";

export default function Home() {
  const [sliderValue, setSliderValue] = useState(50);
  const [selectedCohort, setSelectedCohort] = useState(
    "26-35-males-entertainment"
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [selectedMovie, setSelectedMovie] = useState("star-wars");

  const handleMovieChange = (e) => {
    setSelectedMovie(e.target.value);
  };

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
  const movies = moviesData;

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  return (

      <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-24">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 lg:mb-8">
            <div>
              <MovieDisplay
                movies={movies}
                onChangeMovie={handleMovieChange}
                setSliderValue={setSliderValue}
                sliderValue={sliderValue}
                stepSize={stepSize}
                selectedMovie={selectedMovie} // Pass this prop
              />
            </div>

            <div className="flex flex-col space-y-8">
              <CohortInfo
                selectedCohort={selectedCohort}
                onChange={setSelectedCohort}
                currentTimePeriod={currentTimePeriod}
                currentData={currentData}
              />
            </div>
          </div>

          <button
            className="fixed shadow-md z-10 bottom-4 right-4 p-10 text-lg duration-500 ease-in-out transition-transform transform hover:scale-105 hover:bg-green-500 transform hover:-translate-y-1 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 rounded-full px-5 text-white py-5 bg-blue-500"
            onClick={handleModalOpen}
          >
            Want More?
          </button>

          <OptionsModal
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
          />

        </div>
      </main>
  );
}
