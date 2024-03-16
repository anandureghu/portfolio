import { Route, Routes } from "react-router-dom";
import LandingPage from "../../modules/landing/pages/LandingPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  );
};

export default AppRouter;
