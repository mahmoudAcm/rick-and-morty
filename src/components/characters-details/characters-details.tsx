//components
import { Section } from "@components/styles";
import { Typography } from "@mui/material";
import { StyledAvatar, Name, Details, Item, List } from "./styles";

export default function CharactersDetails() {
  return (
    <Section>
      <div className="container">
        <StyledAvatar
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="character profile picture"
        />
        <Name>Rick Sanchez</Name>

        <Details>
          <List>
            <span className="list-name">Informations</span>
            <Item>
              <div className="col">
                <Typography className="key">Gender</Typography>
                <Typography className="value">Male</Typography>
              </div>
            </Item>
            <Item>
              <div className="col">
                <Typography className="key">Status</Typography>
                <Typography className="value">Alive</Typography>
              </div>
            </Item>            
            <Item>
              <div className="col">
                <Typography className="key">Specie</Typography>
                <Typography className="value">Human</Typography>
              </div>
            </Item>            
            <Item>
              <div className="col">
                <Typography className="key">Origin</Typography>
                <Typography className="value">Earth (C-137)</Typography>
              </div>
            </Item>
          </List>
          <List>
            <span className="list-name">Episodes</span>
            {new Array(4).fill(0).map((_, idx) => (
              <Item key={idx}>
                <div className="col">
                  <Typography className="code">S01E01</Typography>
                  <Typography className="episode-name">Pilot</Typography>
                  <Typography className="date">December 2, 2013</Typography>
                </div>
              </Item>
            ))}
          </List>
        </Details>
      </div>
    </Section>
  );
}
