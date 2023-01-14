import Box from "@mui/material/Box";
import LoadingIcon from "@icons/Loading";

export default function Loader() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        position: "fixed",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: (theme) => theme.zIndex.modal * 2,
        backgroundColor: "white",
      }}
    >
      <LoadingIcon />
    </Box>
  );
}
