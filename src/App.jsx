import "./App.css";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import ErrorHandler from "./components/ErrorHandler.jsx";
import RootLayout from "./RootLayout.jsx";
import Cars from "./pages/Cars.jsx";
import CarDetails from "./components/CarDetails.jsx";
import ReviewsPage from "./pages/ReviewsPage.jsx";

import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="reviews" element={<ReviewsPage />} />
      <Route path="cars" element={<Cars />}>
        <Route path=":carID" element={<CarDetails />} />
      </Route>
      <Route path="*" element={<ErrorHandler />} />
    </Route>
  )
);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
