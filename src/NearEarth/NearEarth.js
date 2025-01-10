import React, { useState, useEffect } from 'react';
import axios from 'axios';

function NearEarth() {
  const [planetData, setPlanetData] = useState(null);

  useEffect(() => {
    fetchImg();
  }, []);

  const fetchImg = async () => {
    try {
      const response = await axios.get('https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=aI0lowZZihqcsQMXO8nba7KXsKjJrKRSGfZINxXs');
      const data = response.data.near_earth_objects;
      setPlanetData(data); // Set the fetched data to the state
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className='lg:w-[80%] w-full mx-auto'>
      <h1 className='text-center p-3 font-semibold text-xl'>Near Earth Objects</h1>

      <div className="bg-gray-50 p-4 grid grid-cols-1 lg:grid-cols-2 gap-5">
  {planetData ? (
    Object.entries(planetData).map(([date, objects]) => (
      <div key={date} className="mb-8">
        <h2 className="text-2xl font-bold text-gray-700 mb-4 border-b pb-2">
          Date: {date}
        </h2>
        {objects.map((object) => (
          <div
            key={object.id}
            className="bg-white shadow-lg rounded-lg p-6 mb-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-lg font-semibold text-gray-800">
              Name: {object.name}
            </h3>
            <p className="text-sm text-gray-500">ID: {object.id}</p>
            <p className="text-sm text-gray-500">
              Absolute Magnitude:{" "}
              <span className="font-medium">{object.absolute_magnitude_h}</span>
            </p>
            <p className="text-sm text-gray-500">
              Estimated Diameter (km):{" "}
              <span className="font-medium">
                {object.estimated_diameter.kilometers.estimated_diameter_min} -{" "}
                {object.estimated_diameter.kilometers.estimated_diameter_max}
              </span>
            </p>
            <p className="text-sm text-gray-500">
              Potentially Hazardous:{" "}
              <span
                className={`font-medium ${
                  object.is_potentially_hazardous_asteroid
                    ? "text-red-500"
                    : "text-green-500"
                }`}
              >
                {object.is_potentially_hazardous_asteroid ? "Yes" : "No"}
              </span>
            </p>
            <h4 className="text-md font-semibold text-gray-700 mt-4">
              Close Approach Data:
            </h4>
            {object.close_approach_data.map((approach, index) => (
              <div
                key={index}
                className="mt-2 p-4 bg-gray-100 rounded border border-gray-200"
              >
                <p className="text-sm text-gray-500">
                  <strong>Date:</strong> {approach.close_approach_date}
                </p>
                <p className="text-sm text-gray-500">
                  <strong>Velocity (km/s):</strong>{" "}
                  {approach.relative_velocity.kilometers_per_second}
                </p>
                <p className="text-sm text-gray-500">
                  <strong>Miss Distance (km):</strong>{" "}
                  {approach.miss_distance.kilometers}
                </p>
                <p className="text-sm text-gray-500">
                  <strong>Orbiting Body:</strong> {approach.orbiting_body}
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>
    ))
  ) : (
    <p className="text-center text-gray-500 text-lg">Loading...</p>
  )}
</div>
     
    </div>
  );
}

export default NearEarth;
