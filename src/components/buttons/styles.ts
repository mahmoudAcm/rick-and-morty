import { styled } from "@mui/material/styles";

export const StyledLoadMoreButton = styled("button")(() => ({
  padding: "10px 32.5px",
  outline: "none",
  border: "none",
  boxShadow:
    "0px 3px 5px rgba(0, 0, 0, 0.2), 0px 1px 18px rgba(0, 0, 0, 0.12), 0px 6px 10px rgba(0, 0, 0, 0.14)",
  borderRadius: 4,
  backgroundColor: "#F2F9FE",
  color: "#2196F3",
  cursor: "pointer",
  display: "flex",
  gap: 10,
  transition: "0.3s box-shadow",
  userSelect: "none",
  "&:active": {
    boxShadow: "none",
  },
}));
