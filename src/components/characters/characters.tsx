//components
import { StyledCharacters, Grid } from "./styles";
import Filter from "./filter";
import CharacterCard from "./characterCard";
import LoadMoreButton from "@components/buttons/loadMore";

export default function Characters() {
  return (
    <StyledCharacters>
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
    </StyledCharacters>
  );
}
