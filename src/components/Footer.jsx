import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/Logo-1.png";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#fff3f4", marginTop: "80px" }}>
      <Stack sx={{ gap: "40px", alignItems: "center", paddingTop: "24px" }}>
        <img src={Logo} alt="logo" style={{ width: "200px", height: "40px" }} />
        <Typography
          variant="subtitle1"
          sx={{ paddingBottom: "40px", color: "" }}
        >
          Made by Balavignesh (Credits: YouTube)
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
