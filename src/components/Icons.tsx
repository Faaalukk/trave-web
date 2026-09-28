interface IconProps {
  size?: number;
  className?: string;
}

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
} as const;

export const SparkleIcon = ({ size = 16 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...stroke}>
    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0Z" />
  </svg>
);

export const SearchIcon = ({ size = 22 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...stroke}>
    <circle cx="11" cy="11" r="8" />
    <path d="M21 21l-4.3-4.3" />
  </svg>
);

export const WandIcon = ({ size = 22 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...stroke}>
    <path d="M15 4V2" />
    <path d="M15 16v-2" />
    <path d="M8 9h2" />
    <path d="M20 9h2" />
    <path d="M17.8 11.8 19 13" />
    <path d="M15 9h.01" />
    <path d="M17.8 6.2 19 5" />
    <path d="m3 21 9-9" />
    <path d="M12.2 6.2 11 5" />
  </svg>
);

export const StarIcon = ({ size = 14, fill = 'currentColor' }: IconProps & { fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke="none">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

export const MapIcon = ({ size = 28 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...stroke} style={{ flex: 'none' }}>
    <path d="M3 6l6-3 6 3 6-3v15l-6 3-6-3-6 3Z" />
    <path d="M9 3v15" />
    <path d="M15 6v15" />
  </svg>
);

export const PhoneIcon = ({ size = 18 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...stroke}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" />
  </svg>
);

export const PinIcon = ({ size = 22 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...stroke}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export const MountainIcon = ({ size = 22 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...stroke}>
    <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
  </svg>
);

export const CameraIcon = ({ size = 22 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...stroke}>
    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3Z" />
    <circle cx="12" cy="13" r="3" />
  </svg>
);

export const WalletIcon = ({ size = 22 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...stroke}>
    <path d="M19 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0 0 4h15a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5" />
    <path d="M18 12h.01" />
  </svg>
);

export const UsersIcon = ({ size = 22 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...stroke}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
  </svg>
);

export const ClockIcon = ({ size = 22 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...stroke}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);
