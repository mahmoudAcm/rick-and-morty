import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const StyledCard = styled(Box)(() => ({
  width: 240,
  height: 244,
  backgroundColor: "white",
  borderRadius: 4,
  overflow: "hidden",
  boxShadow:
    "0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.14)",
  "& .card-image": {
    width: "100%",
    height: 168,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundImage:
      "url('https://rickandmortyapi.com/api/character/avatar/1.jpeg')",
  },
  "& .card-content": {
    display: "flex",
    flexDirection: "column",
    padding: "12px 16px",
    "& h6": {
      lineHeight: "30px",
      letterSpacing: "0.15px",
    },
    "& .MuiTypography-body2": {
      lineHeight: "21px",
      letterSpacing: "0.25px",
      color: "rgba(0, 0, 0, 0.6)",
    },
  },
}));
