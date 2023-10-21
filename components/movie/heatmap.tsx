import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const HeatMapD3 = ({ data = {} }) => {
    const ref = useRef(null);

    const createMockData = () => {
        // Define mock time and cohort values
        const mockTimes = Array.from({length: 10}, (_, i) => i);
        const mockCohorts = Array.from({length: 10}, (_, i) => `Cohort ${i}`);

        // Return mock data
        return mockTimes.reduce((acc, time) => {
            acc[time] = mockCohorts.reduce((innerAcc, cohort) => {
                innerAcc[cohort] = {
                    excitement: Math.random(),
                    interest: Math.random(),
                    boredom: Math.random(),
                    fatigue: Math.random()
                };
                return innerAcc;
            }, {});
            return acc;
        }, {});
    };

    const drawHeatMap = (inputData) => {
        const svg = d3.select(ref.current);
        svg.selectAll('*').remove();

        const times = Object.keys(inputData).map(key => +key);
        if (times.length === 0) return;

        const cohorts = Object.keys(inputData[times[0]]);
        if (cohorts.length === 0) return;

        const excitementValues = times.flatMap(time => 
            cohorts.map(cohort => 
                inputData[time][cohort].excitement + 
                inputData[time][cohort].interest - 
                inputData[time][cohort].boredom - 
                inputData[time][cohort].fatigue
            )
        );

        const colorScale = d3.scaleSequential(d3.interpolateBlues)
                             .domain([d3.min(excitementValues), d3.max(excitementValues)]);

        const xScale = d3.scaleLinear()
                        .domain([Math.min(...times), Math.max(...times)])
                        .range([0, 480]);

        const yScale = d3.scaleBand()
                        .domain(cohorts)
                        .range([0, 480])
                        .padding(0.05);

        times.forEach(time => {
            cohorts.forEach(cohort => {
                const excitementValue = inputData[time][cohort].excitement + 
                                        inputData[time][cohort].interest - 
                                        inputData[time][cohort].boredom - 
                                        inputData[time][cohort].fatigue;

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
        svg.append("g")
           .attr("class", "x-axis")
           .attr("transform", "translate(0," + 480 + ")")
           .call(d3.axisBottom(xScale));

        svg.append("g")
           .attr("class", "y-axis")
           .call(d3.axisLeft(yScale));
    };

    useEffect(() => {
        if (Object.keys(data).length === 0) {
            drawHeatMap(createMockData());
        } else {
            drawHeatMap(data);
        }
    }, [data]);

    return <svg ref={ref} width="500" height="500"></svg>;
};

export default HeatMapD3;
