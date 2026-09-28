import type {
  ActivityKey,
  AudienceKey,
  BudgetKey,
  DurationKey,
  ProvinceKey,
  RegionKey,
  TransitKey,
  TypeKey,
} from './types';

export const REGION_KEYS: RegionKey[] = ['north', 'northeast', 'central', 'east', 'west', 'south'];
export const TYPE_KEYS: TypeKey[] = [
  'sea',
  'mountain',
  'waterfall',
  'river',
  'cafe',
  'temple',
  'market',
];
export const ACTIVITY_KEYS: ActivityKey[] = ['photo', 'dive', 'camp', 'fish', 'bike', 'hike'];
export const BUDGET_KEYS: BudgetKey[] = ['free', 'u500', 'u1000', 'over1000'];
export const AUDIENCE_KEYS: AudienceKey[] = ['solo', 'couple', 'family', 'friends'];
export const DURATION_KEYS: DurationKey[] = ['short', 'day', 'multi'];
export const TRANSIT_KEYS: TransitKey[] = [
  'bts_sukhumvit',
  'bts_silom',
  'mrt_blue',
  'mrt_purple',
  'arl',
];

export const PROVINCES_BY_REGION: Record<RegionKey, ProvinceKey[]> = {
  north: ['chiangmai', 'chiangrai', 'maehongson'],
  northeast: ['nakhonratchasima', 'ubonratchathani'],
  central: ['bangkok', 'ayutthaya'],
  east: ['rayong', 'trat'],
  west: ['kanchanaburi'],
  south: ['phuket', 'krabi', 'suratthani'],
};
