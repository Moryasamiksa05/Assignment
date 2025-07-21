import React from "react";
import ARViewer from "./components/ARViewer";
import CTAButton from "./components/CTAButton";
import AnalyticsPanel from "./components/AnalyticsPanel";

const App = () => {
  const dummyStats = {
    totalScans: 120,
    uniqueUsers: 88,
    avgTimeSpent: '3m 15s',
  };

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
      <AnalyticsPanel stats={dummyStats} />
    </div>
  );
};

export default App;
