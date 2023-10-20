import { useState } from "react";

import Image from "next/image";
import MovieSlider from "./movieSlider";

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
  
  
  

  export default MovieDisplay;