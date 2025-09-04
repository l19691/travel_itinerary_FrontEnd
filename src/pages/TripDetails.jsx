import React from "react";
import { useParams } from "react-router-dom";

const TripDetails = ({ itinerary }) => {
  const { id } = useParams();
  const trip = itinerary.find((t) => t.id.toString() === id);

  if (!trip) return <p className="text-center mt-6">Trip not found</p>;

  const mockWeather = {
    temperature: "24°C",
    condition: "Sunny",
    humidity: "50%",
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-indigo-700 mb-4">Trip Details</h2>
      <p>
        <strong>Destination:</strong> {trip.destination}
      </p>
      <p>
        <strong>Date:</strong> {trip.date}
      </p>
      <div className="mt-4 p-4 bg-blue-100 rounded">
        <h3 className="font-bold mb-2">Mock Weather Info</h3>
        <p>Condition: {mockWeather.condition}</p>
        <p>Temperature: {mockWeather.temperature}</p>
        <p>Humidity: {mockWeather.humidity}</p>
      </div>
    </div>
  );
};

export default TripDetails;
