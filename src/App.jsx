import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import TripDetails from "./pages/TripDetails";

const App = () => {
  const [itinerary, setItinerary] = useState(() => {
    const saved = localStorage.getItem("itinerary");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("itinerary", JSON.stringify(itinerary));
  }, [itinerary]);

  const addEntry = (entry) => setItinerary([...itinerary, entry]);
  const deleteEntry = (id) =>
    setItinerary(itinerary.filter((i) => i.id !== id));
  const editEntry = (updated) =>
    setItinerary(itinerary.map((i) => (i.id === updated.id ? updated : i)));
  const reorderItinerary = (items) => setItinerary(items);

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-indigo-600 p-4 text-white flex gap-4 justify-between">
        <Link to="/" className="font-bold">
          Itinerary
        </Link>
        <div className="flex gap-4">
          <Link to="/about">About</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/login">Login</Link>
        </div>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <Home
              itinerary={itinerary}
              addEntry={addEntry}
              deleteEntry={deleteEntry}
              editEntry={editEntry}
              reorderItinerary={reorderItinerary}
            />
          }
        />
        <Route
          path="/trip/:id"
          element={<TripDetails itinerary={itinerary} />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="*"
          element={<p className="p-6 text-center">404 - Page Not Found</p>}
        />
      </Routes>
    </div>
  );
};

export default App;
