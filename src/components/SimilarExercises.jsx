import { Box, Stack, Typography } from "@mui/material";
import HorizontalScrollbar from "./HorizontalScrollbar";
import Loader from "./Loader";

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{ mt: { lg: "100px" } }}>
      <Typography variant="h3" sx={{ marginBottom: 5 }}>
        Exercises that target the same muscle group
      </Typography>
      <Stack sx={{ flexDirection: "row", position: "relative", padding: 2 }}>
        {targetMuscleExercises.length ? (
          <HorizontalScrollbar data={targetMuscleExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
      <Typography variant="h3" sx={{ marginBottom: 5 }}>
        Exercises that target the same equipment
      </Typography>
      <Stack sx={{ flexDirection: "row", position: "relative", padding: 2 }}>
        {targetMuscleExercises.length ? (
          <HorizontalScrollbar data={equipmentExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
