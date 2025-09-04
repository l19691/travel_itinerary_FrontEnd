import { useState } from "react";

function ItineraryForm({ addTrip }) {
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!destination.trim() || !date) return;

    const today = new Date().toISOString().split("T")[0];
    if (date < today) {
      alert("Please select a valid future date.");
      return;
    }

    addTrip({
      id: Date.now(),
      destination,
      date,
    });

    setDestination("");
    setDate("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block mb-1 text-sm font-medium text-gray-700">
          Destination
        </label>
        <input
          type="text"
          className="w-full border border-gray-300 rounded-md p-2"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          placeholder="e.g. Sicilia, Sudtirol, Roma"
          required
        />
      </div>
      <div>
        <label className="block mb-1 text-sm font-medium text-gray-700">
          Date
        </label>
        <input
          type="date"
          className="w-full border border-gray-300 rounded-md p-2"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Add Trip
      </button>
    </form>
  );
}

export default ItineraryForm;
