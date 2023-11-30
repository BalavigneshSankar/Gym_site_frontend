import { useEffect, useState } from "react";
import fetchData, { exerciseOptions } from "../utils/fetchData";
import { Box, Typography, Stack, Pagination } from "@mui/material";
import ExerciseCard from "./ExerciseCard";

const Exercises = ({ exercises, bodyPart, setExercises }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;

  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData;
      if (bodyPart === "all") {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises?limit=100`,
          exerciseOptions
        );
        setExercises(exercisesData);
      } else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}?limit=100`,
          exerciseOptions
        );
        setExercises(exercisesData);
      }
    };
    fetchExercisesData();
  }, [bodyPart]);

  const indexOfLastExercise = currentPage * exercisesPerPage; // 2 * 9 = 18
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage; // 18 - 9 = 9
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  ); // 9, 18

  return (
    <Box
      id="exercises"
      sx={{ p: "20px", marginTop: { xs: "50px", lg: "110px" } }}
    >
      <Typography variant="h3" sx={{ marginBottom: "46px" }}>
        Search Results:
      </Typography>
      <Stack
        sx={{
          flexDirection: "row",
          flexWrap: "wrap",
          gap: { xs: "50px", lg: "110px" },
          justifyContent: "center",
        }}
      >
        {currentExercises.map((exercise) => (
          <ExerciseCard key={exercise.id} exercise={exercise} />
        ))}
      </Stack>
      <Stack sx={{ marginTop: "100px", alignItems: "center" }}>
        {exercises.length > 9 && (
          <Pagination
            count={Math.ceil(exercises.length / exercisesPerPage)}
            color="standard"
            shape="rounded"
            size="large"
            defaultPage={1}
            page={currentPage}
            onChange={paginate}
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
