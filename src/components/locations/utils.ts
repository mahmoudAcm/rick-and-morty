import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { createLocationQuery } from "./queries";

//utils
import { updateQuery } from "../../client";

export const useLocationDetails = (id?: string) => {
  const { data, fetchMore } = useQuery(createLocationQuery(id ?? "0"));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    fetchMore({
      query: createLocationQuery(id),
      updateQuery: updateQuery("none"),
    }).then(() => {
      setLoading(false);
    });
  }, [id]);

  return { data, loading };
};
