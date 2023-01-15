import { useEffect, useState } from "react";

//components
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import { StyledToolbar, StyledNav } from "./styles";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

//utils
import { useMediaQuery } from "@mui/material";

//icons
import MenuIcon from "@icons/Menu";
import CloseIcon from "@icons/Close";

export default function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(() => theme.breakpoints.down("md"));
  const [open, setOpen] = useState(false);

  const handleOpen = (open: boolean) => () => {
    setOpen(open);
  };

  const nav = (
    <StyledNav>
      <ul>
        <Link to="/characters" onClick={handleOpen(false)}>
          <Typography component="li" fontWeight={700} variant="h3">
            Characters
          </Typography>
        </Link>
        <Link to="/locations" onClick={handleOpen(false)}>
          <Typography component="li" fontWeight={700} variant="h3">
            Locations
          </Typography>
        </Link>
        <Link to="/episodes" onClick={handleOpen(false)}>
          <Typography component="li" fontWeight={700} variant="h3">
            Episodes
          </Typography>
        </Link>
      </ul>
    </StyledNav>
  );

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <AppBar color="transparent" position="relative">
      <StyledToolbar>
        <img src={import.meta.env.BASE_URL + "logo.svg"} alt="logo" />
        {isMobile ? <></> : nav}
        {!open ? (
          <span className="MenuIcon" onClick={handleOpen(true)}>
            <MenuIcon />
          </span>
        ) : (
          <span className="MenuIcon" onClick={handleOpen(false)}>
            <CloseIcon />
          </span>
        )}
        <div className={(open ? "show" : "") + " mobile-nav"}>{nav}</div>
      </StyledToolbar>
    </AppBar>
  );
}
