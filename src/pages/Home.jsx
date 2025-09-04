import React from "react";
import ItineraryForm from "../components/ItineraryForm";
import ItineraryList from "../components/ItineraryList";

const Home = ({
  itinerary,
  addEntry,
  deleteEntry,
  editEntry,
  reorderItinerary,
}) => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-indigo-700">
        Travel Itinerary Planner
      </h1>
      <ItineraryForm addTrip={addEntry} />
      <ItineraryList
        trips={itinerary}
        deleteEntry={deleteEntry}
        editEntry={editEntry}
        reorderItinerary={reorderItinerary}
      />
    </div>
  );
};

export default Home;
