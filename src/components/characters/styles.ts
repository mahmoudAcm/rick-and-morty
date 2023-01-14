import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { styled } from "@mui/material/styles";

export const StyledCard = styled(Box)(() => ({
  width: 240,
  height: 244,
  backgroundColor: "white",
  borderRadius: 4,
  overflow: "hidden",
  boxShadow:
    "0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.14)",
  "& .card-image": {
    width: "100%",
    height: 168,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundImage:
      "url('https://rickandmortyapi.com/api/character/avatar/1.jpeg')",
  },
  "& .card-content": {
    display: "flex",
    flexDirection: "column",
    padding: "12px 16px",
    "& h6": {
      lineHeight: "30px",
      letterSpacing: "0.15px",
    },
    "& .MuiTypography-body2": {
      lineHeight: "21px",
      letterSpacing: "0.25px",
      color: "rgba(0, 0, 0, 0.6)",
    },
  },
}));

export const StyledAvatar = styled(Avatar)(() => ({
  width: 300,
  height: 300,
  border: "5px solid #F2F2F7",
}));

export const Name = styled(Typography)(() => ({
  fontSize: 48,
  lineHeight: "56.25px",
  color: "#081F32",
  marginTop: 16,
}));

export const StyledDetails = styled(Box)(() => ({
  display: "flex",
  gap: 20,
  marginTop: 42,
}));

export const List = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  "& .list-name": {
    fontSize: 20,
    fontWeight: 500,
    lineHeight: "24px",
    letterSpacing: "0.15px",
    color: "#8E8E93",
    marginBottom: 36,
  },
}));

export const Item = styled(Box)(() => ({
  width: 413,
  minHeight: 64,
  display: "flex",
  alignItems: "center",
  borderBottom: "1px solid #ccc",
  padding: "10px 16px",
  "& .col": {
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
  "& .key, & .code": {
    fontWeight: 700,
    fontSize: 16,
    lineHeight: "24px",
    letterSpacing: "0.15px",
    color: "#081F32",
  },
  "& .value, & .episode-name": {
    fontSize: 14,
    lineHeight: "21px",
    letterSpacing: "0.25px",
    color: "#6E798C",
  },
  "& .date": {
    fontSize: 10,
    lineHeight: "16px",
    letterSpacing: "1.5px",
    color: "#8E8E93",
  },
}));
