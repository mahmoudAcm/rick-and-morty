//types
import { HTMLAttributes } from "react";

//components
import { StyledLoadMoreButton } from "./styles";

interface LoadMoreButtonProps extends HTMLAttributes<HTMLButtonElement> {}

export default function LoadMoreButton(props: LoadMoreButtonProps) {
  return <StyledLoadMoreButton {...props}>LOAD MORE</StyledLoadMoreButton>;
}
