//components
import { StyledCard } from "@components/styles";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

//types
import { Episode as EpisodeType } from "@__types__";

interface EpisodeProps extends EpisodeType {}

export default function Episode(props: EpisodeProps) {
  return (
    <Link to={"/episodes/" + props.id}>
      <StyledCard>
        <Typography variant="h6" align="center">
          {props.name}
        </Typography>
        <Typography variant="body2" align="center" color="rgba(0, 0, 0, 0.6)">
          {props.air_date}
        </Typography>
        <Typography
          fontWeight={700}
          align="center"
          className="ep-code"
          color="rgba(0, 0, 0, 0.6)"
        >
          {props.episode}
        </Typography>
      </StyledCard>
    </Link>
  );
}
