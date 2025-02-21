import { lazy, Suspense } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import Loading from "./components/Loading";
import NotFound from "./pages/NotFound";
import Landing from "./pages/Landing";

const Layout = lazy(() => import("./components/Layout"));

export const router = createBrowserRouter([
  {
    path: "",
    element: (
      <Suspense fallback={<Loading />}>
        <Layout />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      { path: "*", element: <Navigate to="/404" /> },
      { path: "404", element: <NotFound /> },
    ],
  },
]);
