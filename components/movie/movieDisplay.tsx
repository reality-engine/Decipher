
import Image from "next/image";
import MovieSlider from "./movieSlider";

const MovieDisplay = ({
  movies,
  onChangeMovie,
  setSliderValue,
  stepSize,
  sliderValue,
  selectedMovie, // Add this prop
}) => {
  const movieDetails = movies[selectedMovie];

  return (
    <div className="flex flex-col items-center col-span-2 lg:col-span-1">
      <p className="mb-4 lg:mb-8 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        Get started by moving the slider for&nbsp;
        <code className="font-mono font-bold">
          <select value={selectedMovie} onChange={onChangeMovie} className="mb-4">
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
          width={600}
          height={1200}
        />
      </div>

      <MovieSlider onChange={setSliderValue} stepSize={stepSize} value={sliderValue} />
    </div>
  );
};

export default MovieDisplay;
