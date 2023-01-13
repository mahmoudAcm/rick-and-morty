//components
import { StyledFilter } from "@components/styles";
import TextField from "@mui/material/TextField";

export default function Filter() {
  return (
    <StyledFilter>
      <TextField label="Filter by name" sx={{ width: "326px !important" }} />
      <TextField select label="Type" />
      <TextField select label="Dimension" />
    </StyledFilter>
  );
}
