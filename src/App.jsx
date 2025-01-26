import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayoutCm from "./pages/RootLayout";
import GamePage from "./pages/game/Game";
import AboutPage from "./pages/about/About";

//router
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayoutCm />,
    children: [
      { index: true, element: <GamePage /> },
      { path: "/about", element: <AboutPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
