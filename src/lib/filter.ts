import { PLACES } from '../data/places';
import type { Filter, FilterKind, Place } from '../data/types';

const FILTER_KINDS: FilterKind[] = [
  'region',
  'province',
  'type',
  'activity',
  'budget',
  'audience',
  'duration',
  'transit',
];

export const isFilterKind = (value: string): value is FilterKind =>
  (FILTER_KINDS as string[]).includes(value);

function matches(place: Place, filter: Filter): boolean {
  switch (filter.kind) {
    case 'type':
      return place.type === filter.key;
    case 'activity':
      return place.activities.includes(filter.key as Place['activities'][number]);
    case 'budget':
      return place.budget === filter.key;
    case 'audience':
      return place.audience.includes(filter.key as Place['audience'][number]);
    case 'duration':
      return place.duration === filter.key;
    case 'region':
      return place.region === filter.key;
    case 'province':
      return place.province === filter.key;
    case 'transit':
      return (place.transit ?? []).includes(filter.key as NonNullable<Place['transit']>[number]);
    default:
      return true;
  }
}

/** Every place matching the filter; the whole catalogue when there is none. */
export function filterPlaces(filter: Filter | null): Place[] {
  if (!filter) return PLACES;
  return PLACES.filter((place) => matches(place, filter));
}

/** Up to `limit` other places in the same region. */
export function nearbyPlaces(place: Place, limit = 3): Place[] {
  return PLACES.filter((p) => p.region === place.region && p.id !== place.id).slice(0, limit);
}
