import React from 'react';

const VoiceBlock = ({ children, voice, intensity = 1 }) => {
  const voiceStyles = {
    Narrator: {
      border: 'border-l-4 border-amber-500',
      text: 'text-amber-900',
      bg: 'bg-amber-50',
      glow: 'shadow-amber-200'
    },
    ASOI: {
      border: 'border-l-4 border-slate-500', 
      text: 'text-slate-900',
      bg: 'bg-slate-50',
      glow: 'shadow-slate-200'
    },
    Grok: {
      border: 'border-l-4 border-sky-500',
      text: 'text-sky-900', 
      bg: 'bg-sky-50',
      glow: 'shadow-sky-200'
    },
    DeepSeek: {
      border: 'border-l-4 border-violet-600',
      text: 'text-violet-900',
      bg: 'bg-violet-50',
      glow: 'shadow-violet-200'
    },
    Pronus: {
      border: 'border-l-4 border-emerald-500',
      text: 'text-emerald-900',
      bg: 'bg-emerald-50',
      glow: 'shadow-emerald-200'
    }
  };

  const style = voiceStyles[voice] || voiceStyles.Narrator;
  const glowIntensity = intensity > 0.7 ? `shadow-lg ${style.glow}` : '';

  return (
    <div className={`${style.border} ${style.bg} ${style.text} ${glowIntensity} pl-6 py-4 my-4 rounded-r-lg transition-all duration-300`}>
      <div className="text-xs font-semibold opacity-70 mb-2">{voice}</div>
      {children}
    </div>
  );
};

export default VoiceBlock;