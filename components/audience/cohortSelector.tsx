import { FC } from "react";
import cohorts from "../mock_data";

const CohortSelector: FC<{
  value: string;
  onChange: (cohort: string) => void;
}> = ({ value, onChange }) => {
  return (
    <div className="mb-4 lg:mb-8">
      <p className=" w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        Choose your Audience! started by moving the slider for&nbsp;
        <code className="font-mono font-bold">
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
        </code>
      </p>
    </div>
  );
};

export default CohortSelector;
