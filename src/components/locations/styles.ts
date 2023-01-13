import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const StyledCard = styled(Box)(() => ({
  width: 240,
  height: 128,
  padding: "38px 16px",
  backgroundColor: "white",
  boxShadow:
    "0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.14)",
  borderRadius: 4,
  "& h6": {
    lineHeight: "30px",
    letterSpacing: "0.15px",
  },
  "& .MuiTypography-body2": {
    lineHeight: "21px",
    letterSpacing: "0.25px",
  },
}));
