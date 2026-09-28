import { useState } from 'react';
import { useI18n } from '../lib/i18n';
import type { RegionKey } from '../data/types';

/**
 * Stylised region picker. The original build delegated this to a separate
 * `thailand-map.html` in an iframe; here it is an inline SVG so the map shares
 * the app's palette, language and focus handling instead of postMessage.
 *
 * The outlines are deliberately schematic — they exist to make the six regions
 * tappable and recognisable, not to be cartographically accurate.
 */
const REGION_SHAPES: Record<RegionKey, { d: string; label: [number, number] }> = {
  north: {
    d: 'M110,28 L160,20 L188,55 L182,100 L150,140 L112,148 L82,120 L78,70 Z',
    label: [131, 88],
  },
  northeast: {
    d: 'M182,100 L230,78 L272,110 L280,165 L252,225 L200,232 L172,196 L168,140 Z',
    label: [222, 160],
  },
  central: {
    d: 'M150,140 L168,140 L172,196 L178,250 L156,286 L120,280 L104,232 L108,172 Z',
    label: [141, 218],
  },
  west: {
    d: 'M82,150 L108,172 L104,232 L120,280 L112,318 L88,312 L70,258 L66,196 Z',
    label: [90, 240],
  },
  east: {
    d: 'M178,250 L200,232 L252,225 L262,262 L232,300 L186,296 L162,282 Z',
    label: [214, 268],
  },
  south: {
    d: 'M120,280 L156,286 L162,300 L172,340 L160,380 L172,420 L162,470 L176,520 L150,540 L128,500 L134,450 L124,400 L136,350 L112,318 Z',
    label: [148, 420],
  },
};

const ORDER = Object.keys(REGION_SHAPES) as RegionKey[];

interface ThailandMapProps {
  activeRegion?: RegionKey | null;
  onSelect: (region: RegionKey) => void;
}

export function ThailandMap({ activeRegion = null, onSelect }: ThailandMapProps) {
  const { L } = useI18n();
  const [hovered, setHovered] = useState<RegionKey | null>(null);

  return (
    <svg
      viewBox="0 0 320 560"
      role="group"
      aria-label="Thailand regions"
      style={{ width: '100%', height: 560, display: 'block', borderRadius: 20 }}
    >
      <rect width="320" height="560" fill="var(--color-bg)" rx="20" />
      {ORDER.map((key) => {
        const shape = REGION_SHAPES[key];
        const isActive = activeRegion === key;
        const isHot = isActive || hovered === key;
        return (
          <g
            key={key}
            role="button"
            tabIndex={0}
            aria-label={L('region', key)}
            aria-pressed={isActive}
            style={{ cursor: 'pointer' }}
            onClick={() => onSelect(key)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onSelect(key);
              }
            }}
            onMouseEnter={() => setHovered(key)}
            onMouseLeave={() => setHovered((prev) => (prev === key ? null : prev))}
          >
            <path
              d={shape.d}
              fill={
                isActive
                  ? 'var(--color-accent)'
                  : isHot
                    ? 'var(--color-accent-300)'
                    : 'var(--color-accent-2-300)'
              }
              stroke="var(--color-bg)"
              strokeWidth="2.5"
              strokeLinejoin="round"
              style={{ transition: 'fill .18s ease' }}
            />
            <text
              x={shape.label[0]}
              y={shape.label[1]}
              textAnchor="middle"
              fontSize="13"
              fontFamily="var(--font-heading)"
              fill={isActive ? 'var(--color-bg)' : 'var(--color-accent-900)'}
              style={{ pointerEvents: 'none', userSelect: 'none' }}
            >
              {L('region', key)}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
