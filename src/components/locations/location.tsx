//components
import { StyledCard } from "@components/styles";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

//types
import { Location as LocationType } from "@__types__";

interface LocationProps extends LocationType {}

export default function Location(props: LocationProps) {
  return (
    <Link to={"/locations/" + props.id}>
      <StyledCard>
        <Typography variant="h6" align="center">
          {props.name ?? "Earth (C-137)"}
        </Typography>
        <Typography variant="body2" align="center" color="rgba(0, 0, 0, 0.6)">
          {props.dimension ?? "Planet"}
        </Typography>
      </StyledCard>
    </Link>
  );
}
