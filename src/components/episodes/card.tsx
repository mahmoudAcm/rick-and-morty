//components
import { StyledCard } from "@components/styles";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function Card() {
  return (
    <Link to="/episodes/1287287">
      <StyledCard>
        <Typography variant="h6" align="center">
          Pilot
        </Typography>
        <Typography variant="body2" align="center" color="rgba(0, 0, 0, 0.6)">
          December 2, 2013
        </Typography>
        <Typography
          fontWeight={700}
          align="center"
          className="ep-code"
          color="rgba(0, 0, 0, 0.6)"
        >
          SE01E01
        </Typography>
      </StyledCard>
    </Link>
  );
}
