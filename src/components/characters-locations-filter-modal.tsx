import * as React from "react";
import { styled } from "@mui/material/styles";

//components
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { StyledMobileFilter } from "./styles";

//icons
import CloseIcon from "@icons/Close";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  [theme.breakpoints.up("lg")]: {
    display: "none",
  },
  "& .MuiDialogContent-root": {
    padding: theme.spacing(1, 2),
  },
}));

const ApplyButton = styled(Box)(() => ({
  margin: "33px 16px 19px",
  padding: "10px 16px",
  background: "#E3F2FD",
  boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24)",
  borderRadius: 4,
  fontWeight: 500,
  fontSize: 14,
  lineHeight: "16px",
  textTransform: "uppercase",
  color: "#2196F3",
  userSelect: "none",
  cursor: "pointer",
  textAlign: "center",
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

export default function CustomizedDialogs({
  children,
}: {
  children: JSX.Element;
}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <StyledMobileFilter onClick={handleClickOpen} />
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullWidth
        maxWidth="md"
      >
        <Box sx={{ m: 0, p: 2, display: "flex", alignItems: "center" }}>
          <Typography sx={{ flex: 1 }}>Filters</Typography>
          <IconButton aria-label="close" onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <DialogContent
          sx={{ display: "flex", flexDirection: "column", gap: "20px" }}
        >
          {children}
        </DialogContent>
        <ApplyButton onClick={handleClose}>Apply</ApplyButton>
      </BootstrapDialog>
    </div>
  );
}
