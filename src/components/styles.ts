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
