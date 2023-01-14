import { useParams } from "react-router-dom";

//components
import { Section } from "@components/styles";
import { Typography } from "@mui/material";
import { StyledAvatar, Name, StyledDetails, Item, List } from "./styles";
import Loader from "@components/loader";
import { Link } from "react-router-dom";

//icons
import RightArrowIcon from "@icons/RightArrow";

//utils
import { useCharacterDetails } from "./utils";

//types
import { Episode } from "@__types__";

export default function Details() {
  const { id } = useParams();
  const { data, loading } = useCharacterDetails(id);

  if (loading || !data || !data.character) return <Loader />;

  return (
    <Section>
      <div className="container">
        <StyledAvatar
          src={
            data.character.image ??
            "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          }
          alt="character profile picture"
        />
        <Name>{data.character.name ?? "Rick Sanchez"}</Name>

        <StyledDetails>
          <List>
            <span className="list-name">Informations</span>
            <Item>
              <div className="col">
                <Typography className="key">Gender</Typography>
                <Typography className="value">
                  {data.character.gender}
                </Typography>
              </div>
            </Item>
            <Item>
              <div className="col">
                <Typography className="key">Status</Typography>
                <Typography className="value">
                  {data.character.status}
                </Typography>
              </div>
            </Item>
            <Item>
              <div className="col">
                <Typography className="key">Specie</Typography>
                <Typography className="value">
                  {data.character.species}
                </Typography>
              </div>
            </Item>
            <Item>
              <div className="col">
                <Typography className="key">Origin</Typography>
                <Typography className="value">
                  {data.character.origin.name}
                </Typography>
              </div>
            </Item>
            {data.character.type ? (
              <Item>
                <div className="col">
                  <Typography className="key">Type</Typography>
                  <Typography className="value">
                    {data.character.type}
                  </Typography>
                </div>
              </Item>
            ) : (
              <></>
            )}
          </List>
          <List>
            <span className="list-name">Episodes</span>
            {(data.character.episode ?? []).map((episode: Episode) => (
              <Link to={import.meta.env.BASE_URL + "episodes/" + episode.id} key={episode.id}>
                <Item>
                  <div className="col">
                    <Typography className="code">{episode.episode}</Typography>
                    <Typography className="episode-name">
                      {episode.name}
                    </Typography>
                    <Typography className="date">{episode.air_date}</Typography>
                  </div>
                  <RightArrowIcon />
                </Item>
              </Link>
            ))}
          </List>
        </StyledDetails>
      </div>
    </Section>
  );
}
