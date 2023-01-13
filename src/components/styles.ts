import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const Section = styled(Box)(() => ({
  width: "100%",
  minHeight: "100vh",
  "& .container": {
    maxWidth: 1230,
    margin: "26px auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

export const StyledFilter = styled(Box)(() => ({
  display: "flex",
  marginTop: 20,
  gap: 20,
  "& .MuiInputBase-root": {
    borderRadius: 8,
  },
  "& .MuiTextField-root": { m: 1, width: 240 },
}));

export const Grid = styled(Box)(() => ({
  width: "100%",
  display: "grid",
  marginTop: 61,
  columnGap: 20,
  rowGap: 24,
  justifyContent: "center",
  gridTemplateColumns: "repeat(auto-fit,240px)",
  marginBottom: 48,
}));

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
  "& .ep-code": {
    fontSize: 14,
    lineHeight: "21px",
    letterSpacing: "0.25px",
  },
}));
