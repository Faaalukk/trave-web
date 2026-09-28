import type { CSSProperties } from 'react';

/**
 * A picture frame that falls back to a generated scene when no photo exists.
 *
 * The catalogue has no photography yet, so most slots render a deterministic
 * gradient derived from `seed` — stable across renders, distinct between
 * neighbouring cards — with the caption on top. Pass `src` once real imagery
 * is available and the slot shows it instead.
 */
interface ImageSlotProps {
  seed: string;
  label: string;
  src?: string;
  rounded?: boolean;
  style?: CSSProperties;
  /** Rendered above the photo, bottom-left, for attribution. */
  credit?: string;
}

function hash(seed: string): number {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return Math.abs(h);
}

function gradientFor(seed: string): string {
  const h = hash(seed);
  // Stay inside the sea/forest arc of the palette so slots read as one family.
  const base = 150 + (h % 90);
  const second = base + 25 + ((h >> 8) % 40);
  const light = 62 + ((h >> 16) % 14);
  const angle = 120 + ((h >> 4) % 120);
  return `linear-gradient(${angle}deg, oklch(${light}% 0.09 ${base}), oklch(${light - 20}% 0.11 ${second}))`;
}

export function ImageSlot({ seed, label, src, rounded, style, credit }: ImageSlotProps) {
  return (
    <div
      className={rounded ? 'slot slot-rounded' : 'slot'}
      style={src ? style : { background: gradientFor(seed), ...style }}
    >
      {src ? (
        <img src={src} alt={label} />
      ) : (
        <span className="slot-label">{label}</span>
      )}
      {src && credit ? (
        <span
          style={{
            position: 'absolute',
            left: 10,
            bottom: 8,
            fontSize: 10,
            color: 'oklch(100% 0 0 / 75%)',
            textShadow: '0 1px 4px rgba(0,0,0,.5)',
          }}
        >
          {credit}
        </span>
      ) : null}
    </div>
  );
}
