import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { createCharacterQuery } from "./queries";

//utils
import { updateQuery } from "../../client";

export const useCharacterDetails = (id?: string) => {
  const { data, error, fetchMore } = useQuery(createCharacterQuery(id ?? "0"));
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      alert("Somthing went wrong!");
      navigate("/characters");
    }
  }, [error]);

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
