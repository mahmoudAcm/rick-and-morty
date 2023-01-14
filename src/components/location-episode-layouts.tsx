//types
import { ReactNode } from "react";

//utils
import { useTheme } from "@mui/material/styles";

//components
import { Section, StyledLocationEpisodeHeaders, Grid } from "./styles";
import Typography from "@mui/material/Typography";

/**
 * @interface LocationEpisodeLayoutsProps
 * @description it consists of two types one for location and one for episode details components
 */
export interface LocationEpisodeLayoutsProps {
  title: string;
  subtitle: string;
  children: ReactNode;
  location?: {
    type: string;
    dimension: string;
  };
  episode?: {
    code: string;
    date: string;
  };
}

export default function LocationEpisodeLayouts(
  props: LocationEpisodeLayoutsProps
) {
  const theme = useTheme();
  return (
    <Section
      sx={{
        "& .subtitle": {
          fontSize: 20,
          lineHeight: "24px",
          fontWeight: 500,
          letterSpacing: "0.15px",
          color: "#8E8E93",
          marginBottom: "-26px",
        },
      }}
    >
      <Section
        component="header"
        sx={{
          minHeight: "fit-content",
          marginBottom: "64px",
          [theme.breakpoints.down("sm")]: {
            marginBottom: "152px",
          },
        }}
      >
        <div className="container">
          <StyledLocationEpisodeHeaders>
            <Typography className="title" align="center">
              {props.title}
            </Typography>
            <div className="row">
              <div className="col">
                <Typography className="col-key">
                  {Boolean(props.location) ? "Type" : "Episode"}
                </Typography>
                <Typography className="col-value">
                  {props.location?.type ?? props.episode?.code}
                </Typography>
              </div>
              <div className="col">
                <Typography className="col-key">
                  {Boolean(props.location) ? "Dimension" : "Date"}
                </Typography>
                <Typography className="col-value">
                  {props.episode?.date ?? props.location?.dimension}
                </Typography>
              </div>
            </div>
          </StyledLocationEpisodeHeaders>
        </div>
      </Section>
      <div className="container">
        <Typography className="subtitle">{props.subtitle}</Typography>
        <Grid>{props.children}</Grid>
      </div>
    </Section>
  );
}
