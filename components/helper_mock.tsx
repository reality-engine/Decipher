// Helper function to transform mock data for heatmap
const generateHeatmapData = (cohortData) => {
    const heatmapData = {};
  
    Object.keys(cohortData).forEach((timePeriod) => {
      heatmapData[timePeriod] = {};
  
      Object.keys(cohortData[timePeriod].generalEmotions).forEach((emotion) => {
        heatmapData[timePeriod][emotion] = cohortData[timePeriod].generalEmotions[emotion];
      });
    });
  
    return heatmapData;
  };

  export default generateHeatmapData
  