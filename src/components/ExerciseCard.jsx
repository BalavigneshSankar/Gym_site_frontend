import { Button, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const ExerciseCard = ({ exercise }) => {
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
      <Stack
        sx={{
          flexDirection: "row",
        }}
      >
        <Button
          sx={{
            color: "#fff",
            backgroundColor: "#ffa9a9",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
            marginLeft: "21px",
          }}
        >
          {exercise.bodyPart}
        </Button>
        <Button
          sx={{
            color: "#fff",
            backgroundColor: "#fcc757",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
            marginLeft: "21px",
          }}
        >
          {exercise.target}
        </Button>
      </Stack>
      <Typography
        sx={{
          color: "#000",
          fontSize: "24px",
          fontWeight: "bold",
          textTransform: "capitalize",
          marginTop: "11px",
          marginLeft: "21px",
          paddingBottom: "10px",
        }}
      >
        {exercise.name}
      </Typography>
    </Link>
  );
};

export default ExerciseCard;
