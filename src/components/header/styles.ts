import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/material/styles";

export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  paddingLeft: "210px !important",
  paddingRight: "210px !important",
  minHeight: "60px !important",
  justifyContent: "space-between",
  "& .MenuIcon": {
    display: "none",
  },
  [theme.breakpoints.down("lg")]: {
    paddingLeft: "24px !important",
    paddingRight: "24px !important",
  },
  [theme.breakpoints.down("md")]: {
    "& .MenuIcon": {
      display: "block",
    },
  },
  [theme.breakpoints.down(321)]: {
    paddingLeft: "10px !important",
    paddingRight: "10px !important",
  },
  [theme.breakpoints.up("md")]: {
    "& .mobile-nav": {
      display: "none",
      "& ul": {
        display: "none",
      },
    },
  },
  "& .mobile-nav": {
    "& nav": {
      width: "100%",
    },
    "& ul": {
      flexDirection: "column",
      gap: 48,
      marginTop: 48,
    },
    width: "100%",
    height: "100vh",
    backgroundColor: "white",
    position: "fixed",
    inset: 0,
    top: 61,
    zIndex: theme.zIndex.appBar * 2,
    display: "none",
    "&.show": {
      display: "flex",
    },
  },
}));

export const StyledNav = styled("nav")(({ theme }) => ({
  height: "fit-content",
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
}));
