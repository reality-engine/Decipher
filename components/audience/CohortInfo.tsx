import CohortSelector from "./cohortSelector";
import {
    RottenTomatoesPredictions,

  } from "@/components/audience/CohortEmotions";

  import RadarVisualization from "@/components/visualisation/radar_viz";
  
const CohortInfo = ({
  selectedCohort,
  onChange,
  currentTimePeriod,
  currentData,
}) => {
  return (
    <div className="flex flex-col w-full">
      <CohortSelector value={selectedCohort} onChange={onChange} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
      <div className="md:col-span-2 space-x-32">
          <RadarVisualization currentData={currentData} />
        </div>
        <div className="md:col-span-1 space-x-32">
          <RottenTomatoesPredictions currentData={currentData} />
        </div>
       
      </div>
    </div>
  );
};


  export default CohortInfo;