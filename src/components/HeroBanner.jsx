import { Box, Button, Typography } from "@mui/material";
import HeroBannerImage from "../assets/images/banner.png";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        marginTop: { xs: "70px", lg: "212px" },
        marginLeft: "50px",
        padding: "20px",
        position: "relative",
      }}
    >
      <Typography sx={{ color: "#ff2625", fontSize: "26px", fontWeight: 600 }}>
        Fitness Club
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: "40px", lg: "44px" },
          fontWeight: 700,
          marginTop: "30px",
          marginBottom: "23px",
        }}
      >
        Sweat, Smile <br /> and Repeat
      </Typography>
      <Typography sx={{ fontSize: "22px", lineHeight: 1.5, marginBottom: 4 }}>
        Check out the most effective exercise
      </Typography>
      <Button
        variant="contained"
        href="#exercises"
        sx={{ backgroundColor: "#ff2625", padding: "10px" }}
      >
        Explore Exercises
      </Button>
      <Typography
        sx={{
          fontSize: "200px",
          fontWeight: 600,
          color: "#ff2625",
          opacity: 0.1,
          display: { xs: "none", lg: "block" },
        }}
      >
        Exercise
      </Typography>
      <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
