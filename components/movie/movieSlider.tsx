import { FC } from "react";

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
      <div>{value} minutes</div>
    </div>
  );

export default MovieSlider;