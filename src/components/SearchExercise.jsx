import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import fetchData, { exerciseOptions } from "../utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";

const SearchExercise = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );
      setBodyParts(["all", ...bodyPartsData]);
    };
    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    const exercisesData = await fetchData(
      "https://exercisedb.p.rapidapi.com/exercises?limit=100",
      exerciseOptions
    );
    const searchedExercise = exercisesData.filter(
      (exercise) =>
        exercise.bodyPart.toLowerCase().includes(search) ||
        exercise.equipment.toLowerCase().includes(search) ||
        exercise.name.toLowerCase().includes(search) ||
        exercise.target.toLowerCase().includes(search)
    );
    setSearch("");
    setExercises(searchedExercise);
    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

  return (
    <Stack
      sx={{
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        marginTop: "37px",
      }}
    >
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: { xs: "30px", lg: "44px" },
          marginBottom: "50px",
          textAlign: "center",
        }}
      >
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box sx={{ marginBottom: "72px", position: "relative" }}>
        <TextField
          value={search}
          onChange={(e) => {
            setSearch(e.target.value.toLowerCase());
          }}
          placeholder="Search Exercises"
          type="text"
          sx={{
            height: "76px",
            width: { xs: "350px", lg: "800px" },
            backgroundColor: "#fff",
            "& .MuiInputBase-input": {
              fontWeight: 600,
            },
          }}
        />
        <Button
          className="search-btn"
          sx={{
            backgroundColor: "#ff2625",
            color: "#fff",
            width: { xs: "80px", lg: "175px" },
            fontSize: { xs: "14px", lg: "20px" },
            height: "56px",
            position: "absolute",
            right: 0,
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: "relative", width: "100%", padding: "20px" }}>
        <HorizontalScrollbar
          data={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
          isBodyParts={true}
        />
      </Box>
    </Stack>
  );
};

export default SearchExercise;
