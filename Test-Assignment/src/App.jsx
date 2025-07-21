
import React, { useState } from "react";
import ARViewer from "./components/ARViewer";
import CTAButton from "./components/CTAButton";
import AnalyticsPanel from "./components/AnalyticsPanel";
import qrImage from "./assets/ARHorizon_QR.png";

const App = () => {
  const [scanned, setScanned] = useState(false);

  const dummyStats = {
    totalScans: 120,
    uniqueUsers: 88,
    avgTimeSpent: '3m 15s',
  };

  const handleSimulateScan = () => {
    // Simulate QR scan
    setScanned(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 flex flex-col items-center p-6">
      <div className="w-full max-w-4xl text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
          🧠 Experience Print Come to Life
        </h1>
        <p className="text-gray-600 text-lg">
          Scan the QR code below using your phone to launch the AR experience.
        </p>
      </div>

      {!scanned ? (
        <>
          <img
            src={qrImage}
            alt="Scan this QR"
            className="w-64 h-64 mb-6 border-4 border-gray-300 rounded-xl shadow-md"
          />
          {/* <button
            className="px-8 py-3 bg-indigo-600 text-white text-lg rounded-full shadow-lg hover:bg-indigo-700 transition-all"
            onClick={handleSimulateScan}
          >
            Simulate QR Scan
          </button> */}
        </>
      ) : (
        <>
          <ARViewer />
          <CTAButton />
          <AnalyticsPanel stats={dummyStats} />
        </>
      )}
    </div>
  );
};

export default App;
