import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { ThemeProvider } from "./Contexts/theme.jsx";
import { LandingPage } from "./index.js";
function App() {
  const MyRouter = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<LandingPage />}></Route>
      </>
    )
  );
  return (
    <ThemeProvider>
      <RouterProvider router={MyRouter} />
    </ThemeProvider>
  );
}

export default App;
