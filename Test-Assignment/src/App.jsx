import React, { useEffect, useState } from "react";
import ARViewer from "./components/ARViewer";
import CTAButton from "./components/CTAButton";
import AnalyticsPanel from "./components/AnalyticsPanel";
import API from "./api"; 

const App = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await API.get("/analytics"); 
        setStats(res.data);
      } catch (error) {
        console.error("Error fetching analytics:", error);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 flex flex-col items-center p-6">
      <div className="w-full max-w-4xl text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
          🧠 Experience Print Come to Life
        </h1>
        <p className="text-gray-600 text-lg">
          Enjoy your immersive Augmented Reality experience below.
        </p>
      </div>

      <ARViewer />
      <CTAButton />
      <AnalyticsPanel stats={stats} />
    </div>
  );
};

export default App;
