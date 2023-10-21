import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const HeatMapD3 = ({ data = {} }) => {
    const ref = useRef(null);

  useEffect(() => {
    drawHeatMap();
  }, [data]);

  const drawHeatMap = () => {
    const svg = d3.select(ref.current);
    svg.selectAll('*').remove(); // clear previous render

    const times = Object.keys(data);
    const cohorts = Object.keys(data[times[0]]);
    const excitementValues = times.flatMap(time => cohorts.map(cohort => data[time][cohort].excitement + data[time][cohort].interest - data[time][cohort].boredom - data[time][cohort].fatigue));

    const colorScale = d3.scaleSequential(d3.interpolateBlues)
                         .domain([d3.min(excitementValues), d3.max(excitementValues)]);

    const xScale = d3.scaleLinear().domain([d3.min(times), d3.max(times)]).range([0, 480]);
    const yScale = d3.scaleBand().domain(cohorts).range([0, 480]).padding(0.05);

    times.forEach(time => {
      cohorts.forEach(cohort => {
        const excitementValue = data[time][cohort].excitement + data[time][cohort].interest - data[time][cohort].boredom - data[time][cohort].fatigue;
        svg.append('rect')
           .attr('x', xScale(time))
           .attr('y', yScale(cohort))
           .attr('width', xScale.bandwidth ? xScale.bandwidth() : (480 / times.length))
           .attr('height', yScale.bandwidth())
           .attr('fill', colorScale(excitementValue))
           .attr('stroke', 'white');
      });
    });

    // Axes
    const xAxis = d3.axisBottom(xScale);
    const yAxis = d3.axisLeft(yScale);

    svg.append("g")
       .attr("class", "x-axis")
       .attr("transform", "translate(0," + 480 + ")")
       .call(xAxis);

    svg.append("g")
       .attr("class", "y-axis")
       .call(yAxis);
  };

  return <svg ref={ref} width="500" height="500"></svg>;
};

export default HeatMapD3;
