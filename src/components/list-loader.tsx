//components
import Typography from "@mui/material/Typography";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

export default function ListLoader({
  loading,
  data,
}: {
  loading?: boolean;
  data: Array<any>;
}) {
  return (
    <>
      {data.length == 0 && !loading ? (
        <Typography
          align="center"
          sx={{ width: "100%", color: "gray", userSelect: "none" }}
        >
          No data was found!
        </Typography>
      ) : (
        <></>
      )}
      <Backdrop
        open={Boolean(loading)}
        sx={{
          position: "absolute",
          alignItems: "flex-start",
          top: -10,
          backgroundColor: "white",
        }}
      >
        <CircularProgress />
      </Backdrop>
    </>
  );
}
