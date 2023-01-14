import { useParams } from "react-router-dom";

//layouts
import LocationEpisodeLayouts from "@components/location-episode-layouts";

//components
import CharacterCard from "@components/characters/character";
import Loader from "@components/loader";

//utils
import { useEpisodeDetails } from "./utils";

//types
import { Character } from "@__types__";

export default function Details() {
  const { id } = useParams();
  const { data, loading } = useEpisodeDetails(id);

  if (loading || !data || !data.episode) return <Loader />;

  return (
    <LocationEpisodeLayouts
      title={data.episode.name}
      episode={{
        code: data.episode.episode,
        date: data.episode.air_date,
      }}
      subtitle="Cast"
    >
      {(data.episode.characters ?? []).map((character: Character) => (
        <CharacterCard key={character.id} {...character} />
      ))}
    </LocationEpisodeLayouts>
  );
}
