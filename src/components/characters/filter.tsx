import { Dispatch, useEffect, useRef, useState } from "react";

//components
import { StyledFilter, StyledMobileFilter } from "@components/styles";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

const SPECIES = [
  "None",
  "Human",
  "Alien",
  "Humanoid",
  "unknown",
  "Poopybutthole",
  "Mythological Creature",
  "Animal",
  "Robot",
  "Cronenberg",
  "Disease",
];
const GENDER = ["None", "Male", "Female", "unknown", "Genderless"];
const STATUS = ["None", "Alive", "unknown", "Dead"];

export interface FilterState {
  name?: string;
  species?: string;
  gender?: string;
  status?: string;
}

export default function Filter({
  onFilter,
}: {
  onFilter: (filter: FilterState) => void;
}) {
  const timeoutRef = useRef<any>();
  const [filter, setFilter] = useState({
    species: "",
    gender: "",
    status: "",
    name: "",
  });

  const handleChange = (name: string) => (evt: any) => {
    setFilter((prev) => ({
      ...prev,
      [name]: evt.target.value == "None" ? "" : evt.target.value,
    }));
  };

  const __clearTimeout__ = () => {
    if (timeoutRef.current !== null) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    __clearTimeout__();
    timeoutRef.current = setTimeout(() => {
      onFilter(filter);
    }, 300);
    return () => __clearTimeout__();
  }, [filter]);

  return (
    <StyledFilter component="form" sx={{ marginTop: "32px" }}>
      <TextField
        label="Filter by name..."
        className="search"
        value={filter.name}
        onChange={handleChange("name")}
      />
      <TextField
        select
        label="Species"
        value={filter.species}
        onChange={handleChange("species")}
      >
        {SPECIES.map((specie, idx) => (
          <MenuItem value={specie} key={idx}>
            {specie}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        select
        label="Gender"
        value={filter.gender}
        onChange={handleChange("gender")}
      >
        {GENDER.map((gender, idx) => (
          <MenuItem value={gender} key={idx}>
            {gender}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        select
        label="Status"
        value={filter.status}
        onChange={handleChange("status")}
      >
        {STATUS.map((status, idx) => (
          <MenuItem value={status} key={idx}>
            {status}
          </MenuItem>
        ))}
      </TextField>
      <StyledMobileFilter />
    </StyledFilter>
  );
}
