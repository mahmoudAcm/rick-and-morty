//components
import { StyledCard } from "@components/styles";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function Card() {
  return (
    <Link to="/locations/81738">
      <StyledCard>
        <Typography variant="h6" align="center">
          Earth (C-137)
        </Typography>
        <Typography variant="body2" align="center" color="rgba(0, 0, 0, 0.6)">
          Planet
        </Typography>
      </StyledCard>
    </Link>
  );
}
