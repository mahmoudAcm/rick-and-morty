//components
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import { StyledToolbar, StyledNav } from "./styles";

//icons
import MenuIcon from "@icons/Menu";

export default function Header() {
  return (
    <AppBar color="transparent" position="relative">
      <StyledToolbar>
        <img src="./logo.svg" alt="logo" />
        <StyledNav>
          <ul>
            <Typography component="li" fontWeight={700} variant="h3">
              Characters
            </Typography>
            <Typography component="li" fontWeight={700} variant="h3">
              Locations
            </Typography>
            <Typography component="li" fontWeight={700} variant="h3">
              Episodes
            </Typography>
          </ul>
        </StyledNav>
        <span className="MenuIcon">
          <MenuIcon />
        </span>
      </StyledToolbar>
    </AppBar>
  );
}
