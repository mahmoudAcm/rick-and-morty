import { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { createLocationQuery } from "./queries";

//utils
import { updateQuery } from "../../client";

const LOCATION_QUERY = createLocationQuery("0");

export const useLocationDetails = (id?: string) => {
  const { data, loading, fetchMore } = useQuery(LOCATION_QUERY);
  useEffect(() => {
    if (!id) return;
    fetchMore({
      query: createLocationQuery(id),
      updateQuery: updateQuery("none"),
    });
  }, [id]);
  return { data, loading };
};
