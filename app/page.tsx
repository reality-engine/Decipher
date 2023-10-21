"use client";

import React, { useState } from "react";

import Footer from "../components/footer";
import cohorts from "@/components/mock_data";
import moviesData from "@/components/mock_movies";
import MovieDisplay from "@/components/movie/movieDisplay";
import CohortInfo from "@/components/audience/CohortInfo";

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

  const [darkMode, setDarkMode] = useState(false); // New state for dark mode

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
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
        // shadow-md fixed right-15 bottom-15 z-10 transition duration-500 ease-in-out hover:bg-red-500 transform hover:-translate-y-1 hover:scale-110 ... focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 rounded-full px-5 text-white py-5 bg-blue-500
          className={`fixed shadow-md  z-10 bottom-4  right-4 p-10 text-lg duration-500 ease-in-out  transition-transform transform hover:scale-105  hover:bg-green-500 transform hover:-translate-y-1 hover:scale-110 ... focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50  rounded-full px-5 text-white py-5 bg-blue-500`}
          onClick={handleModalOpen}
        >
          Want More?
        </button>

        {isModalOpen && (
          <div
            className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
            onClick={() => setIsModalOpen(false)} // Close modal when clicking outside
          >
            <div
              className="bg-white p-8 rounded-lg shadow-xl w-1/2"
              onClick={(e) => e.stopPropagation()} // Prevents modal from closing when the modal content itself is clicked
            >
              <h2 className="text-2xl font-bold mb-6">Options</h2>
              <div className="grid gap-4">
                <button className="bg-gray-200 p-2 rounded hover:bg-gray-300">
                  Download Data as CSV
                </button>
                <button className="bg-gray-200 p-2 rounded hover:bg-gray-300">
                  Access API Documentation
                </button>
                <button className="bg-gray-200 p-2 rounded hover:bg-gray-300">
                  Contact DreamTeam
                </button>
              </div>
              <button
                className="mt-4 block w-full text-center bg-red-500 text-white p-2 rounded hover:bg-red-600"
                onClick={() => setIsModalOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        )}

      </div>
      <Footer />

    </main>
  );
}
