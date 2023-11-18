import { BrowserRouter, Route, Routes } from "react-router-dom";

import { InputProvider } from "../hooks/useInputContext";

import HomePage from "../pages/HomePage/HomePage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import CreateTrainingPage from "../pages/CreateTrainingPage/CreateTrainingPage";
import ExercisesPage from "../pages/ExercisesPage/ExercisesPage";

const Router = () => {
  return (
    <BrowserRouter>
      <InputProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/registerPage" element={<RegisterPage />} />
          <Route path="/createTrainingPage" element={<CreateTrainingPage />} />
          <Route path="/exercisesPage" element={<ExercisesPage />} />
        </Routes>
      </InputProvider>
    </BrowserRouter>
  );
};

export default Router;
