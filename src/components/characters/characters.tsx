import { useQuery } from "@apollo/client";

//components
import { StyledCharacters } from "./styles";
import Filter from "./filter";
import Card from "./character";
import LoadMoreButton from "@components/buttons/loadMore";
import { Grid } from "@components/styles";

//types
import { Character } from "@__types__";

//queries
import { createCharactersQuery } from "./queries";

//utils
import { updateQuery } from "../../client";

const CHARACTERS_QUERY = createCharactersQuery("1");

export default function Characters() {
  const { data, loading, error, fetchMore } = useQuery(CHARACTERS_QUERY);

  const loadMore = () => {
    if (!data) return;
    fetchMore({
      query: createCharactersQuery(data.characters.info.next),
      updateQuery: updateQuery("characters"),
    });
  };

  return (
    <StyledCharacters>
      <div className="container">
        <img src={import.meta.env.BASE_URL + "styled-logo.svg"} alt="logo" />
        {/* <Filter /> */}
        {!loading || data ? (
          <>
            <Grid>
              {data.characters.results.map((character: Character) => (
                <Card {...character} key={character.id} />
              ))}
            </Grid>
            {data.characters.info.next ? (
              <LoadMoreButton onClick={loadMore} loading={loading} />
            ) : (
              <></>
            )}
          </>
        ) : (
          <></>
        )}
      </div>
    </StyledCharacters>
  );
}
