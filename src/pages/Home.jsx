import { Box } from "@mui/material";
import HeroBanner from "../components/HeroBanner";
import SearchExercise from "../components/SearchExercise";
import Exercises from "../components/Exercises";
import { useState } from "react";

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");

  return (
    <Box>
      <HeroBanner />
      <SearchExercise
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        exercises={exercises}
        bodyPart={bodyPart}
        setExercises={setExercises}
      />
    </Box>
  );
};

export default Home;
