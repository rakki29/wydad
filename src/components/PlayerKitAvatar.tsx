interface PlayerKitAvatarProps {
  number: number;
  nameAr: string;
  kitStyle: 'outfield' | 'keeper';
  isCaptain?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export default function PlayerKitAvatar({
  number,
  nameAr,
  kitStyle,
  isCaptain,
  size = 'md',
}: PlayerKitAvatarProps) {
  const isKeeper = kitStyle === 'keeper';
  const primaryColor = isKeeper ? '#181B20' : '#C8102E';
  const secondaryColor = isKeeper ? '#0F766E' : '#FFFFFF';
  const numberColor = isKeeper ? '#F8FAFC' : '#FFFFFF';

  const dimensions =
    size === 'sm'
      ? 'w-12 h-12 rounded-lg'
      : size === 'lg'
        ? 'w-32 h-36 rounded-2xl'
        : 'w-24 h-28 rounded-xl';

  return (
    <div
      className={`relative shrink-0 overflow-hidden flex items-center justify-center border border-stone-200/80 ${dimensions} ${
        isKeeper
          ? 'bg-gradient-to-b from-stone-100 to-stone-200/70'
          : 'bg-gradient-to-b from-stone-50 to-stone-100'
      }`}
      aria-label={`قميص اللاعب ${nameAr} رقم ${number}`}
    >
      <svg
        viewBox="0 0 120 120"
        className="w-[88%] h-[88%] drop-shadow-sm"
        role="img"
        aria-hidden="true"
      >
        {/* Jersey Body & Sleeves */}
        <path
          d="M36 20 L48 16 C53 22 67 22 72 16 L84 20 L108 38 L96 58 L84 50 L84 104 L36 104 L36 50 L24 58 L12 38 Z"
          fill={primaryColor}
          stroke={isKeeper ? '#0F172A' : '#9E0B22'}
          strokeWidth="1.5"
          strokeLinejoin="round"
        />

        {/* Collar Trim */}
        <path
          d="M46 16 C52 25 68 25 74 16"
          fill="none"
          stroke={secondaryColor}
          strokeWidth="3.5"
          strokeLinecap="round"
        />

        {/* Sleeve Cuffs */}
        <path
          d="M15 39 L26 55"
          stroke={secondaryColor}
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M105 39 L94 55"
          stroke={secondaryColor}
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* Subtle Vertical Pinstripe Texture */}
        <line x1="48" y1="26" x2="48" y2="102" stroke="#FFFFFF" strokeOpacity="0.08" strokeWidth="1" />
        <line x1="60" y1="26" x2="60" y2="102" stroke="#FFFFFF" strokeOpacity="0.08" strokeWidth="1" />
        <line x1="72" y1="26" x2="72" y2="102" stroke="#FFFFFF" strokeOpacity="0.08" strokeWidth="1" />

        {/* Three Continental Gold Stars + Mini Club Shield */}
        <g transform="translate(71, 31)">
          <circle cx="-4" cy="0" r="1.3" fill="#EAB308" />
          <circle cx="0" cy="-1.5" r="1.4" fill="#EAB308" />
          <circle cx="4" cy="0" r="1.3" fill="#EAB308" />
          <path
            d="M-4 3 L4 3 L4 9 C4 12 0 14 0 14 C0 14 -4 12 -4 9 Z"
            fill="#FFFFFF"
            stroke="#9E0B22"
            strokeWidth="0.8"
          />
          <circle cx="0" cy="7.5" r="1.6" fill="#C8102E" />
        </g>

        {/* Captain Armband on Left Sleeve */}
        {isCaptain && (
          <rect x="86" y="42" width="12" height="5" rx="1" fill="#EAB308" />
        )}

        {/* Crisp Tabular Jersey Number */}
        <text
          x="60"
          y="78"
          textAnchor="middle"
          fill={numberColor}
          fontFamily="JetBrains Mono, monospace"
          fontWeight="700"
          fontSize={number >= 10 ? '28' : '30'}
        >
          {number}
        </text>
      </svg>
    </div>
  );
}
