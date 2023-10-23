import CohortSelector from "./cohortSelector";
import { RottenTomatoesPredictions } from "@/components/audience/CohortEmotions";
import RadarVisualization from "@/components/visualisation/radar_viz";

const CohortInfo = ({ selectedCohort, onChange, currentTimePeriod, currentData }) => {
  return (
    <div className="flex flex-col w-full">
      <CohortSelector value={selectedCohort} onChange={onChange} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        <div className="md:col-span-2">
          <div className="flex flex-grow bg-white rounded-lg p-12 shadow-md w-full">
            <RadarVisualization currentData={currentData} />
          </div>
        </div>
        <div className="md:col-span-1">
          <div className="flex flex-grow rounded-lg p-4 bg-gradient-to-r from-orange-600 via-purple-800 to-blue-900 shadow-md">
            <RottenTomatoesPredictions currentData={currentData} />
          </div>
        </div>
      </div>
    </div>
  );
};


export default CohortInfo;