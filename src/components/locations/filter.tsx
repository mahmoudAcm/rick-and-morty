import { useEffect, useRef, useState } from "react";

//components
import { StyledFilter } from "@components/styles";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Modal from "@components/characters-locations-filter-modal";

export interface FilterState {
  type?: string;
  dimension?: string;
  name?: string;
}

const TYPES = [
  "None",
  "Planet",
  "Cluster",
  "Space station",
  "Microverse",
  "TV",
  "Resort",
  "Fantasy town",
  "Dream",
  "Dimension",
  "unknown",
  "Menagerie",
  "Game",
  "Customs",
  "Daycare",
  "Dwarf planet (Celestial Dwarf)",
  "Miniverse",
  "Teenyverse",
  "Box",
  "Spacecraft",
  "Artificially generated world",
  "Machine",
  "Arcade",
  "Spa",
  "Quadrant",
  "Quasar",
  "Mount",
  "Liquid",
  "Convention",
  "Woods",
  "Diegesis",
  "Non-Diegetic Alternative Reality",
  "Nightmare",
  "Asteroid",
  "Acid Plant",
  "Reality",
  "Death Star",
  "Base",
  "Elemental Rings",
  "Human",
  "Space",
  "Hell",
  "Police Department",
  "Country",
  "Consciousness",
  "Memory",
];

const DIMENSIONS = [
  "None",
  "Dimension C-137",
  "unknown",
  "Post-Apocalyptic Dimension",
  "Replacement Dimension",
  "Cronenberg Dimension",
  "Fantasy Dimension",
  "Dimension 5-126",
];

export default function Filter({
  onFilter,
}: {
  onFilter: (filter: FilterState) => void;
}) {
  const timeoutRef = useRef<any>();
  const [filter, setFilter] = useState({
    type: "",
    dimension: "",
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

  const inputs = (
    <>
      <TextField
        select
        label="Type"
        value={filter.type}
        onChange={handleChange("type")}
      >
        {TYPES.map((type, idx) => (
          <MenuItem value={type} key={idx}>
            {type}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        select
        label="Dimension"
        value={filter.dimension}
        onChange={handleChange("dimension")}
      >
        {DIMENSIONS.map((dimension, idx) => (
          <MenuItem value={dimension} key={idx}>
            {dimension}
          </MenuItem>
        ))}
      </TextField>
    </>
  );

  return (
    <StyledFilter sx={{ marginTop: "16px" }}>
      <TextField
        label="Filter by name"
        sx={{ width: "326px !important" }}
        className="search"
        value={filter.name}
        onChange={handleChange("name")}
      />
      {inputs}
      <Modal>{inputs}</Modal>
    </StyledFilter>
  );
}
