// Mock data for 26-35 Males in the Entertainment Industry
const maleEntertainment2635 = {
    title: "26-35 Males in the Entertainment Industry",
    timePeriods: {
      "0-30min": {
        generalEmotions: {
          Boredom: 10,
          Excitement: 40,
          Fatigue: 5,
          Interest: 45,
        },
        characterInterests: {
          "Luke Skywalker": 40,
          "Leia Skywalker": 35,
          "Han Solo": 30,
          R2D2: 20,
          "Obi Wan Kenobi": 15,
          C3P0: 10,
        },
        productInterest: {
          Lightsabers: 30,
          StormTroopers: 20,
          // ... add more entities here
        },
        rottenTomatoesPredictions: {
          criticReview: {
            percentage: 85,
            confidenceScore: 0.9,
          },
          audienceReview: {
            percentage: 80,
            confidenceScore: 0.88,
          },
        },
      },
      "30-60min": {
        generalEmotions: {
          Boredom: 5,
          Excitement: 50,
          Fatigue: 10,
          Interest: 35,
        },
        characterInterests: {
          "Luke Skywalker": 45,
          "Leia Skywalker": 30,
          "Han Solo": 40,
          R2D2: 25,
          "Obi Wan Kenobi": 20,
          C3P0: 15,
        },
        productInterest: {
          Lightsabers: 35,
          StormTroopers: 25,
          // ... add more entities here
        },
        rottenTomatoesPredictions: {
          criticReview: {
            percentage: 88,
            confidenceScore: 0.92,
          },
          audienceReview: {
            percentage: 83,
            confidenceScore: 0.9,
          },
        },
      },
      "60-90min": {
        generalEmotions: {
          Boredom: 8,
          Excitement: 55,
          Fatigue: 12,
          Interest: 25,
        },
        characterInterests: {
          "Luke Skywalker": 48,
          "Leia Skywalker": 32,
          "Han Solo": 35,
          R2D2: 27,
          "Obi Wan Kenobi": 21,
          C3P0: 14,
        },
        productInterest: {
          Lightsabers: 28,
          StormTroopers: 22,
          "Galactic Ships": 30,
        },
        rottenTomatoesPredictions: {
          criticReview: {
            percentage: 89,
            confidenceScore: 0.91,
          },
          audienceReview: {
            percentage: 85,
            confidenceScore: 0.9,
          },
        },
      },
    },
  };
  
  // Mock data for 10-18 Females in the Entertainment Industry
  const femaleEntertainment1018 = {
    title: "10-18 Females in the Entertainment Industry",
    timePeriods: {
      "0-30min": {
        generalEmotions: {
          Boredom: 12,
          Excitement: 30,
          Fatigue: 10,
          Interest: 48,
        },
        characterInterests: {
          "Leia Skywalker": 50,
          "Luke Skywalker": 25,
          "Padmé Amidala": 60,
          R2D2: 15,
          "Obi Wan Kenobi": 10,
          C3P0: 12,
        },
        productInterest: {
          "Space Jewelry": 50,
          "Galactic Dresses": 40,
          "Starship Accessories": 35,
        },
        rottenTomatoesPredictions: {
          criticReview: {
            percentage: 82,
            confidenceScore: 0.88,
          },
          audienceReview: {
            percentage: 84,
            confidenceScore: 0.87,
          },
        },
      },
      "30-60min": {
        generalEmotions: {
          Boredom: 10,
          Excitement: 40,
          Fatigue: 8,
          Interest: 42,
        },
        characterInterests: {
          "Leia Skywalker": 52,
          "Luke Skywalker": 24,
          "Padmé Amidala": 62,
          R2D2: 16,
          "Obi Wan Kenobi": 11,
          C3P0: 13,
        },
        productInterest: {
          "Space Jewelry": 52,
          "Galactic Dresses": 43,
          "Starship Accessories": 37,
        },
        rottenTomatoesPredictions: {
          criticReview: {
            percentage: 85,
            confidenceScore: 0.9,
          },
          audienceReview: {
            percentage: 86,
            confidenceScore: 0.89,
          },
        },
      },
    },
  };
  
  // Combine individual cohort data into the final cohorts constant
  const cohorts = {
    "26-35-males-entertainment": maleEntertainment2635,
    "10-18-females-entertainment": femaleEntertainment1018,
  };


  export default cohorts;