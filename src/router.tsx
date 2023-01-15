import { createHashRouter, Outlet } from "react-router-dom";
import { Suspense, lazy } from "react";

//components
import Header from "@components/header";
import Loader from "@components/loader";
const Characters = lazy(() => import("@components/characters"));
const Locations = lazy(() => import("@components/locations"));
const Episodes = lazy(() => import("@components/episodes"));
const CharactersDetails = lazy(() => import("@components/characters/details"));
const LocationDetails = lazy(() => import("@components/locations/details"));
const EpisodeDetails = lazy(() => import("@components/episodes/details"));

const router = createHashRouter([
  {
    path: "*",
    element: (
      <>
        <Header />
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </>
    ),
    children: [
      {
        path: "characters",
        element: <Characters />,
      },
      {
        path: "characters/:id",
        element: <CharactersDetails />,
      },
      {
        path: "locations",
        element: <Locations />,
      },
      {
        path: "locations/:id",
        element: <LocationDetails />,
      },
      {
        path: "episodes",
        element: <Episodes />,
      },
      {
        path: "episodes/:id",
        element: <EpisodeDetails />,
      },
    ],
  },
]);

export default router;
