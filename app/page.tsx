"use client";

import React, { useState } from "react";

import Footer from "../components/footer";
import cohorts from "@/components/mock_data";
import moviesData from "@/components/mock_movies";
import MovieDisplay from "@/components/movie/movieDisplay";
import CohortInfo from "@/components/audience/CohortInfo";
import HeatMapD3 from "@/components/movie/heatmap";
import generateHeatmapData from "@/components/helper_mock";

export default function Home() {
  const [sliderValue, setSliderValue] = useState(50);
  const [selectedCohort, setSelectedCohort] = useState(
    "26-35-males-entertainment"
  );
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

  const maleEntertainmentHeatmap = generateHeatmapData(
    cohorts["26-35-males-entertainment"].timePeriods
  );

  const moviesHeat = {
    ...moviesData,
    "star-wars": {
      ...moviesData["star-wars"],
      heatmapData: maleEntertainmentHeatmap, // Use maleEntertainmentHeatmap as a sample for now
    },
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
            <div className="mt-8">
              {movies[selectedMovie]?.heatmapData && (
                <HeatMapD3 data={movies[selectedMovie].heatmapData} />
              )}
            </div>
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
        <button>Download Insights</button>
        <Footer />
      </div>
    </main>
  );
}
