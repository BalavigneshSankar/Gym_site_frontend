import { Button, Stack, Typography } from "@mui/material";
import BodyPartIcon from "../assets/icons/body-part.png";
import TargetIcon from "../assets/icons/target.png";
import EquipmentIcon from "../assets/icons/equipment.png";

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, equipment, gifUrl, name, target } = exerciseDetail;

  const extraDetail = [
    { icon: BodyPartIcon, name: bodyPart },
    { icon: TargetIcon, name: target },
    { icon: EquipmentIcon, name: equipment },
  ];

  return (
    <Stack
      sx={{
        flexDirection: { xs: "column", lg: "row" },
        gap: "60px",
        padding: "20px",
        alignItems: "center",
      }}
    >
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { xs: "20px", lg: "35px" } }}>
        <Typography variant="h3" sx={{ textTransform: "capitalize" }}>
          {name}
        </Typography>
        <Typography variant="h6">
          Exercises keep you strong. {name} is one of the best exercises to
          target your {target}. It will help improve your moood and gain energy.
        </Typography>
        {extraDetail.map((item, i) => (
          <Stack
            key={i}
            sx={{ flexDirection: "row", gap: "24px", alignItems: "center" }}
          >
            <Button
              sx={{
                backgroundColor: "#fff2db",
                borderRadius: "50%",
                width: "100px",
                height: "100px",
              }}
            >
              <img
                src={item.icon}
                alt={item.name}
                style={{ width: "50px", height: "50px" }}
              />
            </Button>
            <Typography variant="h5" sx={{ textTransform: "capitalize" }}>
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;
