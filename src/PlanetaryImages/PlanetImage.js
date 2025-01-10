import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PlanetImage() {
  // Initialize as an object
  const [planetdata, setPlanetData] = useState(null);

  useEffect(() => {
    fetchImg();
    fetchNasaMedia();
  }, []);

  const fetchImg = async () => {
    try {
      const response = await axios.get('https://api.nasa.gov/planetary/apod?api_key=aI0lowZZihqcsQMXO8nba7KXsKjJrKRSGfZINxXs');
      const data = response.data;
      console.log(data, 'nasadata');
      setPlanetData(data); // Set the fetched data to the state
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


const fetchNasaMedia = async ()=>{
  try{
    const response = await axios.get(`https://api.nasa.gov/DONKI/CME?startDate=yyyy-MM-dd&endDate=yyyy-MM-dd&api_key=aI0lowZZihqcsQMXO8nba7KXsKjJrKRSGfZINxXs`);
    console.log(response,'coronal ejection')
  }catch(error){

  }
}




  return (
    <div>
      {/* Render explanation and image if planetdata is available */}
      {planetdata ? (
        <div className='mt-12'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 items-center w-[80%] mx-auto'>
          <img className='justify-center mx-auto flex' src={planetdata.url} alt="Astronomy" />

          <div>
          <h3 className=' py-3 text-lg font-semibold'>{planetdata.title}</h3>
          <p className='text-justify'>{planetdata.explanation}</p>
          <h3 className=' py-3 text-lg font-semibold'>{planetdata.date}</h3>

          </div>
          </div>
         
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default PlanetImage;
