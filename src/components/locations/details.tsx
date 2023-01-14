//layouts
import LocationEpisodeLayouts from "@components/location-episode-layouts";

//components
import CharacterCard from "@components/characters/card";

//types
import { LocationEpisodeLayoutsProps } from "@components/location-episode-layouts";

interface DetailsProps
  extends Omit<
    LocationEpisodeLayoutsProps["location"],
    "title" | "subtitle" | "children"
  > {
  origin: string;
}

export default function Details(props: DetailsProps) {
  const { origin, ...location } = props;
  return (
    <LocationEpisodeLayouts
      title={origin}
      location={location}
      subtitle="Residents"
    >
      {new Array(10).fill(0).map((_, idx) => (
        <CharacterCard key={idx} />
      ))}
    </LocationEpisodeLayouts>
  );
}
