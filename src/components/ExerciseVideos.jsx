import { Box, Stack, Typography } from "@mui/material";

const ExerciseVideos = ({ exerciseVideos, name }) => {
  return (
    <Box sx={{}}>
      <Typography variant="h3" sx={{ marginBottom: "33px" }}>
        Watch{" "}
        <span style={{ color: "#ff2625", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        exercise videos
      </Typography>
      <Stack
        sx={{
          flexDirection: { lg: "row" },
          flexWrap: "wrap",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: { lg: "110px" },
        }}
      >
        {exerciseVideos?.slice(0, 6).map((item, i) => (
          <a
            key={i}
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
            className="exercise-video"
          >
            <img src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Box>
              <Typography variant="h5" sx={{ color: "#000" }}>
                {item.video.title}
              </Typography>
              <Typography variant="subtitle1" sx={{ color: "#000" }}>
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
