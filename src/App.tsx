//components
import Header from "@components/header";
import Characters from "@components/characters";
import Locations from "@components/locations";
import Episodes from "@components/episodes";
import CharactersDetails from "@components/characters/details";
import LocationDetails from "@components/locations/details";
import EpisodeDetails from "@components/episodes/details";

export default function App() {
  return (
    <>
      <Header />
      {/* <Characters />
      <Locations />
      <Episodes /> */}
      <CharactersDetails />
      {/*<LocationDetails
        origin="Earth (Replacement Dimension)"
        type="Planet"
        dimension="Replacement Dimension"
      />
      <EpisodeDetails
        episode_name="Pilot"
        code="SE01E01"
        date="December 2, 2013"
      /> */}
    </>
  );
}
