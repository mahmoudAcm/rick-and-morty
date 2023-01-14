//components
import { StyledCard } from "./styles";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

//types
import { Character as CharacterType } from "@__types__";

export interface CharacterProps extends CharacterType {}

export default function Character(props: CharacterProps) {
  return (
    <Link to={import.meta.env.BASE_URL + "characters/" + props.id}>
      <StyledCard>
        <div
          className="card-image"
          style={{ backgroundImage: `url('${props.image}')` }}
        ></div>
        <div className="card-content">
          <Typography variant="h6">{props.name ?? "Rick Sanchez"}</Typography>
          <Typography variant="body2">{props.species ?? "Human"}</Typography>
        </div>
      </StyledCard>
    </Link>
  );
}
