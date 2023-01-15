import { useCallback, useRef, useState } from "react";
import { useQuery } from "@apollo/client";

//components
import { Section, StyledFilter, Grid } from "@components/styles";
import TextField from "@mui/material/TextField";
import Card from "./episode";
import LoadMoreButton from "../buttons/loadMore";
import ListLoader from "@components/list-loader";

//utils
import { updateQuery } from "../../client";

//types
import { Episode } from "@__types__";

//queries
import { createEpisodesQuery } from "./queries";

const EPISODES_QUERY = createEpisodesQuery("1", {});

export default function Episodes() {
  const { data, loading, error, fetchMore } = useQuery(EPISODES_QUERY);
  const [filter, setFilter] = useState("");
  const timeoutRef = useRef<any>();

  const loadMore = () => {
    if (!data) return;
    fetchMore({
      query: createEpisodesQuery(
        data.episodes.info.next,
        getFilterObject(filter)
      ),
      updateQuery: updateQuery("episodes"),
    });
  };

  const __clearTimeout = () => {
    if (timeoutRef.current !== null) clearTimeout(timeoutRef.current);
  };

  const getFilterObject = useCallback((filter: string) => {
    const obj: Record<string, string> = {};
    if (filter.match(/[S\d+E\d]/g)) {
      obj["episode"] = filter;
    } else {
      obj["name"] = filter;
    }
    return obj;
  }, []);

  return (
    <Section>
      <div className="container">
        <img src={import.meta.env.BASE_URL + "episodes.svg"} alt="logo" />
        <StyledFilter sx={{ marginTop: "16px" }}>
          <TextField
            label="Filter by name or episode (ex. S01 or S01E02)"
            sx={{ width: "500px !important" }}
            className="search"
            onChange={(evt) => {
              const filter = evt.target.value;
              __clearTimeout();
              timeoutRef.current = setTimeout(() => {
                fetchMore({
                  query: createEpisodesQuery("1", getFilterObject(filter)),
                  updateQuery: updateQuery("none"),
                });
              }, 300);
              setFilter(filter);
            }}
          />
        </StyledFilter>
        <Grid>
          <ListLoader loading={loading} data={data?.episodes?.results ?? []} />
          {(data?.episodes?.results ?? []).map((episode: Episode) => (
            <Card key={episode.id} {...episode} />
          ))}
        </Grid>
        {data?.episodes?.info?.next ? (
          <LoadMoreButton onClick={loadMore} loading={loading} />
        ) : (
          <></>
        )}
      </div>
    </Section>
  );
}
