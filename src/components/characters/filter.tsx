//components
import { StyledFilter } from "@components/styles";
import TextField from "@mui/material/TextField";

export default function Filter() {
  return (
    <StyledFilter component="form">
      <TextField label="Filter by name..." />
      <TextField select label="Species" />
      <TextField select label="Gender" />
      <TextField select label="Status" />
    </StyledFilter>
  );
}
