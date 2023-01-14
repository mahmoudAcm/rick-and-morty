//components
import { StyledFilter } from "@components/styles";
import TextField from "@mui/material/TextField";

export default function Filter() {
  return (
    <StyledFilter component="form" sx={{ marginTop: "32px" }}>
      <TextField label="Filter by name..." className="search" />
      <TextField select label="Species" />
      <TextField select label="Gender" />
      <TextField select label="Status" />
    </StyledFilter>
  );
}
