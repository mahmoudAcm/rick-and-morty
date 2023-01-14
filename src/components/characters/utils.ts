import { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { createCharacterQuery } from "./queries";

//utils
import { updateQuery } from "../../client";

const CHARACTER_QUERY = createCharacterQuery("0");

export const useCharacterDetails = (id?: string) => {
  const { data, loading, fetchMore } = useQuery(CHARACTER_QUERY);
  useEffect(() => {
    if (!id) return;
    fetchMore({
      query: createCharacterQuery(id),
      updateQuery: updateQuery("none"),
    });
  }, [id]);
  return { data, loading };
};
