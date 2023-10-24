import { createBrowserRouter, Navigate } from "react-router-dom";
import { Layout } from "./pages/Layout.tsx";
import { Slugs } from "./constants";
import { HomePage } from "@/pages/HomePage/HomePage.tsx";

export const router = createBrowserRouter([
  {
    element: <Layout testid={'layout'} />,
    children: [
      {
        path: Slugs.HOME,
        element: <HomePage />
      }
    ]
  },
  {
    path: Slugs.NOT_FOUND,
    element: <Navigate to={Slugs.HOME} />
  }
])
