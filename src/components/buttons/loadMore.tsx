//types
import { HTMLAttributes } from "react";

//components
import { StyledLoadMoreButton } from "./styles";
import CircularProgress from "@mui/material/CircularProgress";

interface LoadMoreButtonProps extends HTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

export default function LoadMoreButton({
  loading,
  ...props
}: LoadMoreButtonProps) {
  return (
    <StyledLoadMoreButton {...props}>
      LOAD MORE
      {loading ? (
        <CircularProgress
          sx={{ width: "15px !important", height: "15px !important" }}
        />
      ) : (
        <></>
      )}
    </StyledLoadMoreButton>
  );
}
