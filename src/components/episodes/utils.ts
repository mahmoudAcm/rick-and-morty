import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { createEpisodeQuery } from "./queries";

//utils
import { updateQuery } from "../../client";

export const useEpisodeDetails = (id?: string) => {
  const { data, error, fetchMore } = useQuery(createEpisodeQuery(id ?? "0"));
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      alert("Somthing went wrong!");
      navigate("/episodes");
    }
  }, [error]);

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    fetchMore({
      query: createEpisodeQuery(id),
      updateQuery: updateQuery("none"),
    }).then(() => {
      setLoading(false);
    });
  }, [id]);

  return { data, loading };
};
