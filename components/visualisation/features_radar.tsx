import React, { useState } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip, Legend } from 'recharts';


const CohortRadarChart = ({ data }) => {
  return (
    <div>
      <ResponsiveContainer width="100%" height={400}>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" tick={{ fontSize: 16, fill: '#333' }} />
          <PolarRadiusAxis angle={30} tick={{ fontSize: 14, fill: '#666' }} />
          <Radar name="Value" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
          <Tooltip wrapperStyle={{ backgroundColor: '#f5f5f5', fontSize: 14 }} /> {/* Increase font size for tooltip */}
          <Legend wrapperStyle={{ fontSize: 14 }} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CohortRadarChart;
