import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/material/styles";

export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  paddingLeft: "210px !important",
  paddingRight: "210px !important",
  minHeight: "60px !important",
  justifyContent: "space-between",
  [theme.breakpoints.down("lg")]: {
    paddingLeft: "24px !important",
    paddingRight: "24px !important",
  },
  [theme.breakpoints.down(321)]: {
    paddingLeft: "10px !important",
    paddingRight: "10px !important",
  },
}));

export const StyledNav = styled("nav")(({ theme }) => ({
  "& ul": {
    padding: 0,
    display: "flex",
    alignItems: "center",
    listStyleType: "none",
    gap: 24,
  },
  "& li": {
    fontSize: "18px",
    lineHeight: "21px",
    fontFamily: "'Karla', sans-serif",
  },

  [theme.breakpoints.down("md")]: {
    "& ul": {
      display: "none",
    },
  },
}));
