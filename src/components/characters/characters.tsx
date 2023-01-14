//components
import { StyledCharacters } from "./styles";
import Filter from "./filter";
import Card from "./card";
import LoadMoreButton from "@components/buttons/loadMore";
import { Grid } from "@components/styles";

export default function Characters() {
  return (
    <StyledCharacters>
      <div className="container">
        <img src="styled-logo.svg" alt="logo" />
        <Filter />
        <Grid>
          {new Array(10).fill(0).map((_, idx) => (
            <Card key={idx} />
          ))}
        </Grid>
        <LoadMoreButton />
      </div>
    </StyledCharacters>
  );
}
