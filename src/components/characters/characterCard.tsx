//components
import { StyledCard } from "./styles";
import Typography from "@mui/material/Typography";

export default function CharacterCard() {
  return (
    <StyledCard>
      <div className="card-image"></div>
      <div className="card-content">
        <Typography variant="h6">Rick Sanchez</Typography>
        <Typography variant="body2">Human</Typography>
      </div>
    </StyledCard>
  );
}
