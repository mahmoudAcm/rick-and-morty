import { useQuery } from "@apollo/client";

//components
import { Section, StyledFilter, Grid } from "@components/styles";
import TextField from "@mui/material/TextField";
import Card from "./episode";
import LoadMoreButton from "../buttons/loadMore";

//utils
import { updateQuery } from "../../client";

//types
import { Episode } from "@__types__";

//queries
import { createEpisodesQuery } from "./queries";

const EPISODES_QUERY = createEpisodesQuery("1");

export default function Episodes() {
  const { data, loading, error, fetchMore } = useQuery(EPISODES_QUERY);

  const loadMore = () => {
    if (!data) return;
    fetchMore({
      query: createEpisodesQuery(data.episodes.info.next),
      updateQuery: updateQuery("episodes"),
    });
  };

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
        {!loading || data ? (
          <>
            <Grid>
              {(data.episodes.results ?? []).map((episode: Episode) => (
                <Card key={episode.id} {...episode} />
              ))}
            </Grid>
            {data.episodes.info.next ? (
              <LoadMoreButton onClick={loadMore} loading={loading} />
            ) : (
              <></>
            )}
          </>
        ) : (
          <></>
        )}
      </div>
    </Section>
  );
}
