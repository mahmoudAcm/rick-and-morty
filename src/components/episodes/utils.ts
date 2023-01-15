import { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { createEpisodeQuery } from "./queries";

//utils
import { updateQuery } from "../../client";

const EPISODE_QUERY = createEpisodeQuery("0");

export const useEpisodeDetails = (id?: string) => {
  const { data, loading, fetchMore } = useQuery(EPISODE_QUERY);
  useEffect(() => {
    if (!id) return;
    fetchMore({
      query: createEpisodeQuery(id),
      updateQuery: updateQuery("none"),
    });
  }, [id]);
  return { data, loading: !id ?? loading };
};
