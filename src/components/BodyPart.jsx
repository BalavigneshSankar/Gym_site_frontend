import { Stack, Typography } from "@mui/material";
import Icon from "../assets/icons/gym.png";

const BodyPart = ({ item, bodyPart, setBodyPart }) => {
  return (
    <Stack
      sx={{
        justifyContent: "center",
        alignItems: "center",
        gap: "47px",
        width: "270px",
        height: "270px",
        cursor: "pointer",
        backgroundColor: "#fff",
        borderBottomLeftRadius: "20px",
        borderTop: item === bodyPart ? "4px solid #ff2625" : "",
      }}
      className="bodyPart-card"
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, behavior: "smooth" });
      }}
    >
      <img src={Icon} alt="gym" style={{ width: "40px", height: "40px" }} />
      <Typography
        sx={{
          fontSize: "24px",
          fontWeight: "bold",
          color: "#3A1212",
          textTransform: "capitalize",
        }}
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
