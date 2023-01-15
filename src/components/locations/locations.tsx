import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";

//components
import { Section } from "@components/styles";
import Filter from "./filter";
import { Grid } from "@components/styles";
import Card from "./location";
import LoadMoreButton from "../buttons/loadMore";
import ListLoader from "@components/list-loader";

//utils
import { updateQuery } from "../../client";

//types
import { Location } from "@__types__";
import { FilterState } from "./filter";

//queries
import { createLocationsQuery } from "./queries";

const LOCATIONS_QUERY = createLocationsQuery("1", {});

export default function Locations() {
  const { data, loading, error, fetchMore } = useQuery(LOCATIONS_QUERY);
  const [filter, setFilter] = useState<FilterState>({});

  const loadMore = () => {
    if (!data) return;
    fetchMore({
      query: createLocationsQuery(data.locations.info.next, filter),
      updateQuery: updateQuery("locations"),
    });
  };

  return (
    <Section>
      <div className="container">
        <img src={import.meta.env.BASE_URL + "locations.svg"} alt="logo" />
        <Filter
          onFilter={(filter) => {
            fetchMore({
              query: createLocationsQuery("1", filter),
              updateQuery: updateQuery("none"),
            });
            setFilter(filter);
          }}
        />
        <Grid>
          <ListLoader loading={loading} data={data?.locations?.results ?? []} />
          {(data?.locations?.results ?? []).map((location: Location) => (
            <Card {...location} key={location.id} />
          ))}
        </Grid>
        {data?.locations?.info?.next ? (
          <LoadMoreButton onClick={loadMore} loading={loading} />
        ) : (
          <></>
        )}
      </div>
    </Section>
  );
}
