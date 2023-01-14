//layouts
import LocationEpisodeLayouts from "@components/location-episode-layouts";

//components
import CharacterCard from "@components/characters/card";

//types
import { LocationEpisodeLayoutsProps } from "@components/location-episode-layouts";

interface DetailsProps
  extends Omit<
    LocationEpisodeLayoutsProps["episode"],
    "title" | "subtitle" | "children"
  > {
  episode_name: string;
}

export default function Details(props: DetailsProps) {
  const { episode_name, ...episode } = props;
  return (
    <LocationEpisodeLayouts
      title={episode_name}
      episode={episode}
      subtitle="Cast"
    >
      {new Array(10).fill(0).map((_, idx) => (
        <CharacterCard key={idx} />
      ))}
    </LocationEpisodeLayouts>
  );
}
