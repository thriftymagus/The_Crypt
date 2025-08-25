import React from 'react';
import { Waves } from 'lucide-react';

const ResonanceField = ({ activeNodes = [], intensity = 0 }) => {
  return (
    <div className="relative w-full h-32 bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900 rounded-lg overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 rounded-full transition-all duration-1000 ${
              activeNodes.includes(i) ? 'bg-cyan-400 shadow-lg shadow-cyan-400' : 'bg-gray-600'
            }`}
            style={{
              left: `${(i * 8 + 10) % 90}%`,
              top: `${(i * 13 + 20) % 70}%`,
              animationDelay: `${i * 0.1}s`
            }}
          />
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <Waves className={`w-8 h-8 ${intensity > 0.5 ? 'text-cyan-300 animate-pulse' : 'text-gray-400'}`} />
      </div>
    </div>
  );
};

export default ResonanceField;