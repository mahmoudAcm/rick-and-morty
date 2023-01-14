import { useParams } from "react-router-dom";

//layouts
import LocationEpisodeLayouts from "@components/location-episode-layouts";

//components
import CharacterCard from "@components/characters/character";
import Loader from "@components/loader";

//utils
import { useLocationDetails } from "./utils";

//types
import { Character } from "@__types__";

export default function Details() {
  const { id } = useParams();
  const { data, loading } = useLocationDetails(id);

  if (loading || !data || !data.location) return <Loader />;

  return (
    <LocationEpisodeLayouts
      title={data.location.name}
      location={{
        type: data.location.type,
        dimension: data.location.dimension,
      }}
      subtitle="Residents"
    >
      {(data.location.residents ?? []).map((character: Character) => (
        <CharacterCard key={character.id} {...character} />
      ))}
    </LocationEpisodeLayouts>
  );
}
