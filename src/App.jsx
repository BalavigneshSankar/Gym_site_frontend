import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Box } from "@mui/material";
import RootLayout from "./pages/RootLayout";
import Home from "./pages/Home";
import ExerciseDetail from "./pages/ExerciseDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/exercise/:id", element: <ExerciseDetail /> },
    ],
  },
]);

const App = () => {
  return (
    <Box sx={{ width: { xl: "1488px" } }} m="auto">
      <RouterProvider router={router} />
    </Box>
  );
};

export default App;
