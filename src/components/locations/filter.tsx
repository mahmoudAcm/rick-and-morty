//components
import { StyledFilter, StyledMobileFilter } from "@components/styles";
import TextField from "@mui/material/TextField";

export default function Filter() {
  return (
    <StyledFilter sx={{ marginTop: "16px" }}>
      <TextField
        label="Filter by name"
        sx={{ width: "326px !important" }}
        className="search"
      />
      <TextField select label="Type" />
      <TextField select label="Dimension" />
      <StyledMobileFilter />
    </StyledFilter>
  );
}
