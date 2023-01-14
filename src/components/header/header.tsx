//components
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import { StyledToolbar, StyledNav } from "./styles";
import { Link } from "react-router-dom";

//icons
import MenuIcon from "@icons/Menu";

export default function Header() {
  return (
    <AppBar color="transparent" position="relative">
      <StyledToolbar>
        <img src={import.meta.env.BASE_URL + "logo.svg"} alt="logo" />
        <StyledNav>
          <ul>
            <Link to="/characters">
              <Typography component="li" fontWeight={700} variant="h3">
                Characters
              </Typography>
            </Link>
            <Link to="/locations">
              <Typography component="li" fontWeight={700} variant="h3">
                Locations
              </Typography>
            </Link>
            <Link to="/episodes">
              <Typography component="li" fontWeight={700} variant="h3">
                Episodes
              </Typography>
            </Link>
          </ul>
        </StyledNav>
        <span className="MenuIcon">
          <MenuIcon />
        </span>
      </StyledToolbar>
    </AppBar>
  );
}
