//components
import { StyledCard } from "./styles";
import Typography from "@mui/material/Typography";

export default function Card() {
  return (
    <StyledCard>
      <Typography variant="h6" align="center">
        Earth (C-137)
      </Typography>
      <Typography variant="body2" align="center" color="rgba(0, 0, 0, 0.6)">
        Planet
      </Typography>
    </StyledCard>
  );
}
