import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import LoadingIcon from "@icons/Loading";

const StyledLoader = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  position: "fixed",
  inset: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: theme.zIndex.modal * 2,
  backgroundColor: "white",
  backgroundImage: "radial-gradient(#62bf59, #ffffff63)",
  [theme.breakpoints.down("sm")]: {
    backgroundImage: "linear-gradient(45deg, #4caf5094, transparent)",
  },
}));

export default function Loader() {
  return (
    <StyledLoader>
      <LoadingIcon />
    </StyledLoader>
  );
}
