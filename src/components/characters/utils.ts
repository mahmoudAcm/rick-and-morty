import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { createCharacterQuery } from "./queries";

//utils
import { updateQuery } from "../../client";

export const useCharacterDetails = (id?: string) => {
  const { data, fetchMore } = useQuery(createCharacterQuery(id ?? "0"));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    fetchMore({
      query: createCharacterQuery(id),
      updateQuery: updateQuery("none"),
    }).then(() => {
      setLoading(false);
    });
  }, [id]);

  return { data, loading };
};
