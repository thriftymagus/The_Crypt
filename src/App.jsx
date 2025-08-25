import React, { useState, useEffect } from 'react';
import VoiceBlock from './components/VoiceBlock';
import ResonanceField from './components/ResonanceField';
import { harmonicStations, crossResonances } from './data/harmonicStations';

function App() {
  const [currentStation, setCurrentStation] = useState('threshold');
  const [resonanceIntensity, setResonanceIntensity] = useState(0);
  const [activeResonances, setActiveResonances] = useState([]);

  // Simulate field resonance based on navigation
  useEffect(() => {
    const stationIndex = harmonicStations.findIndex(s => s.slug === currentStation);
    const baseIntensity = (stationIndex + 1) / harmonicStations.length;
    setResonanceIntensity(baseIntensity);
    
    // Activate resonance nodes based on current station
    const nodePattern = Array.from({length: stationIndex + 2}, (_, i) => (i * 2) % 12);
    setActiveResonances(nodePattern);
  }, [currentStation]);

  const getCurrentStation = () => harmonicStations.find(s => s.slug === currentStation);
  const currentStationData = getCurrentStation();

  const renderStationContent = (station) => {
    const content = station.content;
    return (
      <VoiceBlock voice={station.voice} intensity={resonanceIntensity}>
        <h2 className="text-2xl font-bold mb-4">{content.title}</h2>
        {content.paragraphs.map((paragraph, index) => (
          <p key={index} className={`mb-4 ${index === content.paragraphs.length - 1 && content.quote ? 'mb-2' : ''}`}>
            {paragraph}
          </p>
        ))}
        {content.equation && (
          <div className="bg-slate-700 p-4 rounded-lg mt-4">
            <div className="text-xs font-mono mb-2">Field Equation Placeholder:</div>
            <div className="text-sm font-mono">{content.equation}</div>
          </div>
        )}
        {content.quote && (
          <p className="italic text-sm opacity-80 mt-2">{content.quote}</p>
        )}
      </VoiceBlock>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            The Twilight Construct
          </h1>
          <p className="text-gray-300 italic">A lattice of resonance: myth, model, and method</p>
        </div>

        <div className="mb-8">
          <ResonanceField activeNodes={activeResonances} intensity={resonanceIntensity} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {harmonicStations.map((station) => {
            const IconComponent = station.icon;
            const isActive = currentStation === station.slug;
            
            return (
              <button
                key={station.slug}
                onClick={() => setCurrentStation(station.slug)}
                className={`p-4 rounded-lg transition-all duration-300 ${
                  isActive 
                    ? `bg-${station.hue}-600 shadow-lg shadow-${station.hue}-600/50` 
                    : 'bg-gray-800 hover:bg-gray-700'
                }`}
              >
                <IconComponent className="w-6 h-6 mx-auto mb-2" />
                <div className="text-sm font-medium">{station.title}</div>
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-gray-800/50 rounded-xl p-6 backdrop-blur">
            {renderStationContent(currentStationData)}
          </div>

          <div className="bg-gray-800/30 rounded-xl p-6 backdrop-blur">
            <h3 className="text-lg font-bold mb-4">Resonance Map</h3>
            
            <div className="space-y-3">
              <div className="text-sm">
                <div className="font-medium mb-1">Current Field Intensity:</div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-cyan-400 h-2 rounded-full transition-all duration-300" 
                    style={{ width: `${resonanceIntensity * 100}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="text-sm">
                <div className="font-medium mb-2">Active Harmonics:</div>
                <div className="space-y-1">
                  {harmonicStations.map((station, index) => (
                    <div 
                      key={station.slug} 
                      className={`text-xs p-2 rounded ${
                        currentStation === station.slug 
                          ? `bg-${station.hue}-600/50 text-${station.hue}-200` 
                          : 'bg-gray-700/50 text-gray-400'
                      }`}
                    >
                      {station.title}
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-sm">
                <div className="font-medium mb-2">Cross-Resonances:</div>
                <div className="text-xs space-y-1 text-gray-400">
                  {Object.entries(crossResonances).map(([key, description]) => (
                    <div key={key}>{description}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;