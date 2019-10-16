import React from "react";
import Travel from "./Travel";
  
const travels = [ {
        destination:"Bali",
        country:"Indonesia",
        photo:"https://images.pexels.com/photos/1814376/pexels-photo-1814376.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        distance: "13,520 km"
    },
    { 
        destination:"Kowloon",
        country:"Hong Kong",
        photo:"https://images.pexels.com/photos/1814376/pexels-photo-1814376.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        distance:"13,520 km"
    },
    {
        destination:"Phuket",
        country:"Thailand",
        photo:"https://images.pexels.com/photos/1814376/pexels-photo-1814376.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        distance:"13,520 km"
    },
    {
        destination:"Phu Quoc",
        country:"Vietnam",
        photo:"https://images.pexels.com/photos/1814376/pexels-photo-1814376.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        distance:"13,520 km"
    },
    {
        destination:"Taiwan",
        country:"Taiwan",
        photo:"https://images.pexels.com/photos/1814376/pexels-photo-1814376.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        distance:"13,520 km"
    }
  ];

  
  const Travels = () => (
    <div>
      {travels.map(travel => (
          <Travel key= {travel.destination} 
          destination={travel.destination}
          country={travel.country}
          photo={travel.photo}
          distance={travel.distance} />
      ))}
    </div>
  );

  export default Travels;
  