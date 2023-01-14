//components
import { StyledCard } from "./styles";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function CharacterCard() {
  return (
    <Link to="/characters/187387">
      <StyledCard>
        <div className="card-image"></div>
        <div className="card-content">
          <Typography variant="h6">Rick Sanchez</Typography>
          <Typography variant="body2">Human</Typography>
        </div>
      </StyledCard>
    </Link>
  );
}
