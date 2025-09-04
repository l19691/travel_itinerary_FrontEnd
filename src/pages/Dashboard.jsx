import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("user");
    if (saved) setUser(JSON.parse(saved));
  }, []);

  if (!user || user.role !== "admin") {
    return <p className="text-center mt-8 text-red-600">Access Denied.</p>;
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-indigo-700 mb-4">
        Admin Dashboard
      </h2>
      <p>Welcome, {user.username}. Here you can manage users, trips, etc.</p>
    </div>
  );
};

export default Dashboard;
