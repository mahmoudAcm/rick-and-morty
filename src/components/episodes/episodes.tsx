//components
import { Section, StyledFilter, Grid } from "@components/styles";
import TextField from "@mui/material/TextField";
import Card from "./card";
import LoadMoreButton from "../buttons/loadMore";

export default function Episodes() {
  return (
    <Section>
      <div className="container">
        <img src={import.meta.env.BASE_URL + "episodes.svg"} alt="logo" />
        <StyledFilter sx={{ marginTop: "16px" }}>
          <TextField
            label="Filter by name or episode (ex. S01 or S01E02)"
            sx={{ width: "500px !important" }}
            className="search"
          />
        </StyledFilter>
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
