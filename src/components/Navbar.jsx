import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo.png";

const Navbar = () => {
  return (
    <Stack
      sx={{
        flexDirection: "row",
        justifyContent: "flex-start",
        gap: { xs: "40px", sm: "122px" },
        marginTop: { xs: "20px", sm: "32px" },
      }}
    >
      <Link to="/">
        <img src={Logo} alt="logo" />
      </Link>
      <Stack
        sx={{
          flexDirection: "row",
          alignItems: "flex-end",
          gap: "40px",
          fontSize: "24px",
        }}
      >
        <Link
          to="/"
          style={{ color: "#3A1212", borderBottom: "3px solid #FF2625" }}
        >
          Home
        </Link>
        <a href="#exercises" style={{ color: "#3A1212" }}>
          Exercises
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
