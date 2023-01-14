import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const Section = styled(Box)(({ theme }) => ({
  width: "100%",
  minHeight: "100vh",
  "& .container": {
    maxWidth: 1230,
    margin: "26px auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.down("lg")]: {
      maxWidth: "100vw",
    },
  },
}));

export const StyledFilter = styled(Box)(({ theme }) => ({
  display: "flex",
  marginTop: 20,
  gap: 20,
  "& .MuiInputBase-root": {
    borderRadius: 8,
  },
  "& .MuiTextField-root": { m: 1, width: 240 },
  [theme.breakpoints.down("lg")]: {
    "& .search": {
      width: "312px !important",
    },
    "& .MuiTextField-root:not(.search)": {
      display: "none",
    },
  },
}));

export const Grid = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "grid",
  marginTop: 61,
  columnGap: 20,
  rowGap: 24,
  justifyContent: "center",
  gridTemplateColumns: "repeat(auto-fit, 240px)",
  marginBottom: 48,
  [theme.breakpoints.down("lg")]: {
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 312px))",
  },
}));

export const StyledCard = styled(Box)(({ theme }) => ({
  width: 240,
  minHeight: 128,
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
  [theme.breakpoints.down("lg")]: {
    width: 312,
  },
}));

export const StyledLocationEpisodeHeaders = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: 24,
  "& .title": {
    width: 674,
    fontSize: 36,
    lineHeight: "42.19px",
    color: "#081F32",
  },
  "& .row": {
    marginLeft: 80,
    display: "flex",
    gap: 224,
  },
  "& .col-key": {
    fontSize: 16,
    fontWeight: 700,
    lineHeight: "24px",
    letterSpacing: "0.15px",
    color: "#081F32",
  },
  "& .col-value": {
    fontSize: 14,
    lineHeight: "20px",
    letterSpacing: "0.25px",
    color: "#6E798C",
  },
}));
