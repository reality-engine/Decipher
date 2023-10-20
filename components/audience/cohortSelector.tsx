import { FC } from "react";
import cohorts from "../mock_data";


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

export default CohortSelector;