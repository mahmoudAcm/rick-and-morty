export interface Location {
  id: string;
  name: string;
  type: string;
  dimension: string;
  residents: Character[];
}

export type Origin = Location;

export interface Character {
  id: string;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
}

export interface Episode {
  id: string;
  name: string;
  air_date: string;
  episode: string;
  characters: Character[];
}
