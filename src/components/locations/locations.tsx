//components
import { Section } from "@components/styles";
import Filter from "./filter";
import { Grid } from "@components/styles";
import Card from "./card";
import LoadMoreButton from "../buttons/loadMore";

export default function Locations() {
  return (
    <Section>
      <div className="container">
        <img src="./locations.svg" alt="logo" />
        <Filter />
        <Grid>
          {new Array(10).fill(0).map((_, idx) => (
            <Card key={idx} />
          ))}
        </Grid>
        <LoadMoreButton />
      </div>
    </Section>
  );
}
