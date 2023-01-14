import { useQuery } from "@apollo/client";

//components
import { Section } from "@components/styles";
import Filter from "./filter";
import { Grid } from "@components/styles";
import Card from "./location";
import LoadMoreButton from "../buttons/loadMore";

//utils
import { updateQuery } from "../../client";

//types
import { Location } from "@__types__";

//queries
import { createLocationsQuery } from "./queries";

const LOCATIONS_QUERY = createLocationsQuery("1");

export default function Locations() {
  const { data, loading, error, fetchMore } = useQuery(LOCATIONS_QUERY);

  const loadMore = () => {
    if (!data) return;
    fetchMore({
      query: createLocationsQuery(data.locations.info.next),
      updateQuery: updateQuery("locations"),
    });
  };

  return (
    <Section>
      <div className="container">
        <img src={import.meta.env.BASE_URL + "locations.svg"} alt="logo" />
        {/* <Filter /> */}
        {!loading || data ? (
          <>
            <Grid>
              {data.locations.results.map((location: Location) => (
                <Card {...location} key={location.id} />
              ))}
            </Grid>
            <LoadMoreButton onClick={loadMore} loading={loading} />
          </>
        ) : (
          <></>
        )}
      </div>
    </Section>
  );
}
