import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

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

export const Details = styled(Box)(() => ({
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
