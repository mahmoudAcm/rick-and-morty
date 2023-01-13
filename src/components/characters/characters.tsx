//components
import { Section } from "@components/styles";
import Filter from "./filter";
import CharacterCard from "./characterCard";
import LoadMoreButton from "@components/buttons/loadMore";
import { Grid } from "@components/styles";

export default function Characters() {
  return (
    <Section>
      <div className="container">
        <img src="styled-logo.svg" alt="logo" />
        <Filter />
        <Grid>
          {new Array(10).fill(0).map((_, idx) => (
            <CharacterCard key={idx} />
          ))}
        </Grid>
        <LoadMoreButton />
      </div>
    </Section>
  );
}
