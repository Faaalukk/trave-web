export type Lang = 'th' | 'en';

export type RegionKey = 'north' | 'northeast' | 'central' | 'east' | 'west' | 'south';
export type TypeKey = 'sea' | 'mountain' | 'waterfall' | 'river' | 'cafe' | 'temple' | 'market';
export type ActivityKey = 'photo' | 'dive' | 'camp' | 'fish' | 'bike' | 'hike';
export type BudgetKey = 'free' | 'u500' | 'u1000' | 'over1000';
export type AudienceKey = 'solo' | 'couple' | 'family' | 'friends';
export type DurationKey = 'short' | 'day' | 'multi';
export type TransitKey = 'bts_sukhumvit' | 'bts_silom' | 'mrt_blue' | 'mrt_purple' | 'arl';
export type ProvinceKey =
  | 'chiangmai'
  | 'chiangrai'
  | 'maehongson'
  | 'nakhonratchasima'
  | 'ubonratchathani'
  | 'bangkok'
  | 'ayutthaya'
  | 'rayong'
  | 'trat'
  | 'kanchanaburi'
  | 'phuket'
  | 'krabi'
  | 'suratthani';

/** The dimensions a place can be filtered on. One filter is active at a time. */
export type FilterKind =
  | 'region'
  | 'province'
  | 'type'
  | 'activity'
  | 'budget'
  | 'audience'
  | 'duration'
  | 'transit';

export type LabelKind = FilterKind;

export type Filter = { kind: FilterKind; key: string };

export interface Place {
  id: string;
  name: string;
  nameEn: string;
  region: RegionKey;
  province: ProvinceKey;
  type: TypeKey;
  activities: ActivityKey[];
  budget: BudgetKey;
  audience: AudienceKey[];
  duration: DurationKey;
  rating: number;
  reviews: number;
  price: string;
  priceEn: string;
  hours: string;
  desc: string;
  descEn: string;
  transit?: TransitKey[];
}
