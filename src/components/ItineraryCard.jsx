import { useState } from "react";
import { Link } from "react-router-dom";

function ItineraryCard({ entry, deleteEntry, editEntry }) {
  const [isEditing, setIsEditing] = useState(false);
  const [destination, setDestination] = useState(entry.destination);
  const [date, setDate] = useState(entry.date);

  const handleEdit = () => {
    if (isEditing) {
      editEntry({ ...entry, destination, date });
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="bg-white rounded-lg p-4 shadow hover:shadow-md transition">
      {isEditing ? (
        <>
          <input
            type="text"
            className="border p-2 w-full mb-2 rounded"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
          <input
            type="date"
            className="border p-2 w-full mb-2 rounded"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </>
      ) : (
        <>
          <h3 className="text-lg font-bold text-indigo-600">
            {entry.destination}
          </h3>
          <p className="text-sm text-gray-500">{entry.date}</p>
        </>
      )}

      <div className="mt-4 flex gap-2 justify-end">
        <button
          className="px-3 py-1 text-sm rounded bg-blue-500 text-white hover:bg-blue-600"
          onClick={handleEdit}
        >
          {isEditing ? "Save" : "Edit"}
        </button>
        <button
          className="px-3 py-1 text-sm rounded bg-red-500 text-white hover:bg-red-600"
          onClick={() => deleteEntry(entry.id)}
        >
          Delete
        </button>
        <Link
          to={`/trip/${entry.id}`}
          className="px-3 py-1 text-sm rounded bg-green-500 text-white hover:bg-green-600"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default ItineraryCard;
