const WavingFlag = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`relative ${className}`}>
    <svg width="0" height="0" className="absolute">
      <defs>
        <filter id="wave">
          <feTurbulence type="turbulence" baseFrequency="0.01 0.06" numOctaves="3" seed="2">
            <animate attributeName="baseFrequency" values="0.01 0.06;0.02 0.08;0.01 0.06" dur="4s" repeatCount="indefinite" />
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" scale="8" />
        </filter>
      </defs>
    </svg>
    <div className="animate-flag-wave">{children}</div>
  </div>
);

export const UKFlag = ({ className = "" }: { className?: string }) => (
  <WavingFlag className={className}>
    <svg viewBox="0 0 60 40" className="w-full h-full drop-shadow-md rounded-sm">
      <rect width="60" height="40" fill="#012169" />
      <path d="M0,0 L60,40 M60,0 L0,40" stroke="#fff" strokeWidth="7" />
      <path d="M0,0 L60,40 M60,0 L0,40" stroke="#C8102E" strokeWidth="4" />
      <path d="M30,0 V40 M0,20 H60" stroke="#fff" strokeWidth="10" />
      <path d="M30,0 V40 M0,20 H60" stroke="#C8102E" strokeWidth="6" />
    </svg>
  </WavingFlag>
);

export const AustraliaFlag = ({ className = "" }: { className?: string }) => (
  <WavingFlag className={className}>
    <svg viewBox="0 0 60 40" className="w-full h-full drop-shadow-md rounded-sm">
      <rect width="60" height="40" fill="#00008B" />
      {/* Union Jack mini */}
      <rect width="30" height="20" fill="#012169" />
      <path d="M0,0 L30,20 M30,0 L0,20" stroke="#fff" strokeWidth="3.5" />
      <path d="M0,0 L30,20 M30,0 L0,20" stroke="#C8102E" strokeWidth="2" />
      <path d="M15,0 V20 M0,10 H30" stroke="#fff" strokeWidth="5" />
      <path d="M15,0 V20 M0,10 H30" stroke="#C8102E" strokeWidth="3" />
      {/* Commonwealth Star */}
      <polygon points="15,24 16.5,28 21,28 17.5,30.5 19,35 15,32 11,35 12.5,30.5 9,28 13.5,28" fill="#fff" />
      {/* Southern Cross */}
      <circle cx="45" cy="12" r="1.8" fill="#fff" />
      <circle cx="50" cy="20" r="1.8" fill="#fff" />
      <circle cx="45" cy="28" r="1.8" fill="#fff" />
      <circle cx="38" cy="22" r="1.8" fill="#fff" />
      <circle cx="42" cy="19" r="1.2" fill="#fff" />
    </svg>
  </WavingFlag>
);

export const CanadaFlag = ({ className = "" }: { className?: string }) => (
  <WavingFlag className={className}>
    <svg viewBox="0 0 60 40" className="w-full h-full drop-shadow-md rounded-sm">
      <rect width="60" height="40" fill="#fff" />
      <rect width="15" height="40" fill="#FF0000" />
      <rect x="45" width="15" height="40" fill="#FF0000" />
      {/* Maple Leaf */}
      <path d="M30,8 L31,14 L36,12 L33,16 L38,18 L33,19 L34,24 L30,21 L26,24 L27,19 L22,18 L27,16 L24,12 L29,14 Z" fill="#FF0000" />
      <rect x="29" y="24" width="2" height="5" fill="#FF0000" />
    </svg>
  </WavingFlag>
);

export const USAFlag = ({ className = "" }: { className?: string }) => (
  <WavingFlag className={className}>
    <svg viewBox="0 0 60 40" className="w-full h-full drop-shadow-md rounded-sm">
      {/* Stripes */}
      {[...Array(13)].map((_, i) => (
        <rect key={i} y={i * (40 / 13)} width="60" height={40 / 13} fill={i % 2 === 0 ? "#B22234" : "#fff"} />
      ))}
      {/* Canton */}
      <rect width="24" height="21.5" fill="#3C3B6E" />
      {/* Stars (simplified grid) */}
      {[0, 1, 2, 3, 4].map((row) =>
        [0, 1, 2, 3, 4, 5].map((col) => (
          <circle key={`${row}-${col}`} cx={2 + col * 4} cy={2.2 + row * 4.2} r="0.9" fill="#fff" />
        ))
      )}
      {[0, 1, 2, 3].map((row) =>
        [0, 1, 2, 3, 4].map((col) => (
          <circle key={`s${row}-${col}`} cx={4 + col * 4} cy={4.3 + row * 4.2} r="0.9" fill="#fff" />
        ))
      )}
    </svg>
  </WavingFlag>
);
