import { Location } from './location.ts';

export interface HomepageProps {
  getLocations: () => void;
  locationLoading: boolean;
  locations: Location[];
  type: string;
}
